/*

whatsappButton.js Plugin

Visite http://github.com/sashaclimax/whatsappButton para ter acesso a documentação
e mais informações a respeito do plugin.

pNumber *required* (string/number) = Referente ao número de telefone que será utilizado para enviar a mensagem pela Whatsapp API.
wMessage (string) = Mensagem a ser exibida no elemento mostrado ao hover do botão
phMessage (string) = Mensagem placeholder da caixa de texto que será exibida na versão desktop/landscape mobile/big screen
dMessage (string) = Mensagem padronizada que será exibida na caixa de texto do Whatsapp na versão mobile.
iconStyle (number/string) = Opções de icones para a exibição no plugin.
color(string) = Opções para cores. Aceita cores hexadecimais (#xxxxxx ou #xxx)

*/

class WhatsappButton {

    //Propriedades principais com valores default
    
    welcomeMessage = "Fale conosco"
    placeHolder_Message = "Como podemos te ajudar?"
    defaultMessage = "Olá! Estou entrando em contato e gostaria de saber:"
    HTMLElementsPairs = new Array()
    preDefColors = new Array("black", "white", "green","orange", "yellow", "red", "blue", "purple", "gray")
    
    constructor(pNumber, wMessage, phMessage, dMessage, iconStyle, color, subColor, textColor, fontFamily){
        
        //Inicia a class com valores personalizados para as
        //propriedades principais 
        this.whatsappIcon = ((iconStyle != 0) && (iconStyle != undefined)) ? "whatsapp-"+iconStyle : "whatsapp"
        this.svgWhatsappPath = (this.whatsappIcon ? `node_modules/whatsappButton.js/dist/wpp_icons/My icons collection-SVG-sprite.svg#${this.whatsappIcon}` : "node_modules/whatsappButton.js/dist/wpp_icons/My icons collection-SVG-sprite.svg#whatsapp")

        this.phoneNumber = pNumber ? this.setPhoneNumber(pNumber) : this.setPhoneNumber('error')
        
        this.welcomeMessage = wMessage ? this.setWelcomeMessage(wMessage) : this.welcomeMessage

        this.placeHolder_Message = phMessage ? phMessage : this.placeHolder_Message
        
        this.defaultMessage = dMessage ? dMessage : this.defaultMessage
    
        //Iniciando elementos HTML
        this.initButtonElements(iconStyle, fontFamily)
        
        if(color){
            this.styleColor(color, iconStyle)
        }

        if(subColor){
            this.styleSubColor(subColor, iconStyle)
        }

        if(textColor){
            this.styleTextColor(textColor)
        }

        if(fontFamily){
            this.styleFontFamily(fontFamily)
        }

        //Montando Arrays de pares [parent, child]
        this.mountButtonStructure(iconStyle)

        //Montando elementos HTML indexados com os pares [parent, child]
        document.body.appendChild(this.mountPairs());

        //Setando função responsável por chamar a WhatsApp Web API
        window.sendMessage = this.setSendMessage(this.phoneNumber);
    }

    newElem(tag, attr, attrValue, inHTML){
        //Função para auxiliar na criação dos elementos HTML

        //Cria a variável elem para referenciar ao elemento criado
        //a partir do parametro tag<string>
        var elem;

        //Função para detectar se a tag é do tipo SVG
        //se for, aplica tratativas especiais createElementNS
        function svgSpec(){
            if(tag == "svg"){
                return "svg"
            } else if (tag == "use") {
                return "use"
            } else if(tag == "circle"){
                return "circle"
            } else if(tag == "rect"){
                return "rect"
            } else if(tag == "path"){
                return "path"
            } else {
                return false
            }
        }

        if(svgSpec()){
            elem = document.createElementNS("http://www.w3.org/2000/svg", tag)
        } else {
            elem = document.createElement(tag)
        }

        if(Array.isArray(attr)){
            //Testa se existe mais de um atributo para ser settado.
            //Caso exista, atribui ao elemento pareando os attr: string[] com os attrValue: string[] pelo índice
            for(let i = 0; i < attr.length; i++){
                if((svgSpec() === "svg")){
                    elem.setAttributeNS("http://www.w3.org/2000/svg", attr[i], attrValue[i])
                } else if(svgSpec() == "use"){
                    elem.setAttributeNS("http://www.w3.org/1999/xlink", attr[i], attrValue[i])
                } else if((svgSpec() === "circle") || (svgSpec() === "rect") || (svgSpec() === "path")){
                    elem.setAttributeNS(null, attr[i], attrValue[i])
                } else {
                    elem.setAttribute(attr[i], attrValue[i])
                }
            }

        } else {
            //Caso não exista mais de um atributo para ser settado,
            //Atribui apenas o attr: string simples ao attrValue: string simples
            
            elem.setAttribute(attr, attrValue)
        }

        if(elem.tagName == ("SPAN" || "H1" || "H2" || "H3")){
            elem.innerHTML = inHTML
        }
        let HTMLElem = document.body.appendChild(elem)
        document.body.removeChild(elem)

        return HTMLElem;
    }

    initButtonElements(background, fontFamily){
        /* Método para iniciar os elementos HTML*/
        if(fontFamily && this.isSecureURL(fontFamily)){
            this.linkFontFamily = this.newElem("link", ["rel", "type", "href"], ["stylesheet", "text/css", fontFamily])
            document.head.appendChild(this.linkFontFamily)
        }
        
        if((background == 1) || (background == 2)){
            /* Parametro background checa a necessidade de instanciação dos elementos HTML
            que fazem a cor de fundo do SVG de acordo com o iconStyle escolhido*/
            this.svgCircle = this.newElem("circle", ["cx", "cy", "r", "style"], ["32", "32", "31", "fill: #fff"])
            this.svgPath = this.newElem("path", ["d", "style"], ["M 7 51 l 10 7 l -11 3 z", "fill: #fff"])
        }

        this.buttonWrapper = this.newElem("div", ["id","class"], ["whatsapp_wrapper", "whatsapp_cta"])
        this.inputCheckbox = this.newElem("input", ["id", "class", "type"], ["form_checkbox", "form_checkbox", "checkbox"])
        this.linkButton = this.newElem("a", ["class", "href", "target", "rel"], ["whatsapp_button", "https://api.whatsapp.com/send?phone="+ this.phoneNumber +"&text=" + encodeURIComponent(this.defaultMessage.trim()), "_blank", "noopener noreferrer"])
        this.svgButton = this.newElem("svg", "class", "icon")
        this.svgButtonUse = this.newElem("use", ["xlink:href", "class"], [this.svgWhatsappPath, "svgButtonUse"])
        this.hoverText = this.newElem("div", "class", "whatsapp_hover")
        this.spanHoverText = this.newElem("span", "class", "hover_text", this.welcomeMessage)
        this.formWrapper = this.newElem("div", "class", "whatsapp_form")
        this.buttonForm = this.newElem("form", ["class"], ["form_container"]) //antes: this.newElem("form", ["class", "onsubmit"], ["form_container", "return sendMessage()"])
        this.textarea = this.newElem("textarea", ["id", "class", "name", "placeholder", "required"], ["message", "form_text", "mensagem", this.placeHolder_Message, ""])
        this.label = this.newElem("label", ["id", "class", "for", "onclick"], ["send_label", "send_label", "send", "return sendMessage()"])
        this.labelInput = this.newElem("input", ["id", "type", "name", "value", "class"], ["send", "checkbox", "send", "", "labelInput"])
        this.svgLabelSend = this.newElem("svg", "class", "icon_send")
        this.svgLabelUse = this.newElem("use", ["xlink:href", "class"], ["node_modules/whatsappButton.js/dist/wpp_icons/My icons collection-SVG-sprite.svg#send-button", "svgLabelUse"])

    }

    mountButtonStructure(background){
        /* Este método mapeia os elementos HTML em um Map Object
        A partir dos pares [parent, child], o método monta a estrutura HTML do botão
        utilizando document.appendChild()
        */

        if((background == 1) || (background == 2)){
            /* Parametro background checa a necessidade de instanciação dos elementos HTML
            que fazem a cor de fundo do SVG de acordo com o iconStyle escolhido*/
            this.HTMLElementsPairs.push([this.svgButton, this.svgCircle]) // svg > use
            this.HTMLElementsPairs.push([this.svgButton, this.svgPath]) // svg > use
        } 
        this.HTMLElementsPairs.push([this.svgButton, this.svgButtonUse]) // svg > use
        this.HTMLElementsPairs.push([this.linkButton, this.svgButton]) // a > svg
        
        //whatsappForm elements
        this.HTMLElementsPairs.push([this.svgLabelSend, this.svgLabelUse]) // svg > use
        this.HTMLElementsPairs.push([this.label, this.svgLabelSend]) // label > svg
        this.HTMLElementsPairs.push([this.label, this.labelInput]) // label > svg
        this.HTMLElementsPairs.push([this.buttonForm, this.label]) // form > label
        this.HTMLElementsPairs.push([this.buttonForm, this.textarea]) // form > textarea
        this.HTMLElementsPairs.push([this.formWrapper, this.buttonForm]) // form > textarea

        // whatsappHover elements
        this.HTMLElementsPairs.push([this.hoverText, this.spanHoverText]) // span > div

        // whatsappWrapper elements
        this.HTMLElementsPairs.push([this.buttonWrapper, this.inputCheckbox])
        this.HTMLElementsPairs.push([this.buttonWrapper, this.linkButton])
        this.HTMLElementsPairs.push([this.buttonWrapper, this.hoverText])
        this.HTMLElementsPairs.push([this.buttonWrapper, this.formWrapper])
    }

    mountPairs(){
        /*Este método monta os pares[parent, child]
        gerados pelo método mountButtonStructure
        */

        var parent = 0
        var child = 1
        var mounted

        this.HTMLElementsPairs.forEach((pair) => {
            pair[parent].appendChild(pair[child])
            mounted = pair[parent]
        })

        return mounted;
    }

    styleColor(color, background){
        /* Caso uma cor seja selecionada, atualiza os estilos dos elementos com a mesma */
        
        if(this.checkColorFormat(color) === "preDefColor"){
            //Tratativa para cores pre-definidas
            this.spanHoverText.classList.add(`bg-${color}`)
            this.formWrapper.classList.add(`bg-${color}`)
            this.textarea.classList.add(`bg-${color}`)
            this.svgLabelSend.classList.add(`bg-${color}`)
            if((background == 1) || (background == 2)){
                /* Parametro background checa a necessidade de instanciação dos elementos HTML
                que fazem a cor de fundo do SVG de acordo com o iconStyle escolhido*/
                this.svgCircle.style.cssText = `fill: ${color}`
                this.svgPath.style.cssText = `fill: ${color}`
            }

            if(color == "black"){
                this.svgButtonUse.style.cssText = 'fill: white'
            }

        } else if(this.checkColorFormat(color) === "hexColor"){
            //Tratativa para cores hexadecimais customizadas 
            this.spanHoverText.style.cssText = `background-color: ${color} !important;`
            this.formWrapper.style.cssText = `background-color: ${color} !important;`
            this.textarea.style.cssText = `background-color: ${color} !important;`
            if((background == 1) || (background == 2)){
                this.svgCircle.style.cssText = `fill: ${color}`
                this.svgPath.style.cssText = `fill: ${color}`
            }

            if((color == "#000") || (color == "#000000")){
                this.svgButtonUse.style.cssText = 'fill: white !important;'
            }
        }
    }

    styleSubColor(subColor, background){
        if(background == '3'){
            this.svgButtonUse.style.cssText += `fill: #000000 !important;`
            this.textarea.style.cssText += `border-color: ${subColor} !important;;`
            this.svgLabelSend.style.cssText += `fill: ${subColor} !important;`
        }else if(this.checkColorFormat(subColor)){
            this.svgButtonUse.style.cssText += `fill: ${subColor} !important;`
            this.textarea.style.cssText += `border-color: ${subColor} !important;;`
            this.svgLabelSend.style.cssText += `fill: ${subColor} !important;`
        }
        
    }

    styleTextColor(textColor){
        if(this.checkColorFormat(textColor)){
            this.textarea.style.cssText += `color: ${textColor} !important;`
            this.spanHoverText.style.cssText += `color: ${textColor} !important;`
        }
        
    }

    styleFontFamily(fontFamily){
        if(this.isSecureURL(fontFamily) && this.extractFontFamily(fontFamily)){
            this.textarea.style.cssText += `font-family: ${this.extractFontFamily(fontFamily)} !important;`
            this.spanHoverText.style.cssText += `font-family: ${this.extractFontFamily(fontFamily)} !important;`
        }
    }

    setSendMessage(pNumber){
        //Função para enviar/abrir mensagem através da WhatsApp Web API

        return function(){
            let userInput = document.getElementById("message").value
            userInput = encodeURIComponent(userInput.trim())
            let apiURL = `https://api.whatsapp.com/send?phone=${pNumber}&text=${userInput}`;
            window.open(apiURL, "height=200", "width=200");
            document.getElementById("message").value = "";
            return false;
        }
    }

    checkColorFormat(color){
        if((typeof(color) === "string") 
        && (color.substring(0,1) != "#") 
        && (this.preDefColors.includes(color))) {
            return 'preDefColor'
        } 
        else if((color.substring(0,1) === "#") 
        && ((color.length == 7) 
        || (color.length == 4))) {
            return 'hexColor'
        } 
        else if(((color.substring(0, 3) === "rgb") && this.isRGBColor(color))
        
        || ((color.substring(0, 4) === "rgba" ) && this.isRBGAColor(color))){
            return 'rgb'
        } 
        else {
            throw new Error("Color code has a wrong format. Please, use #xxxxxx, #xxx or\ncheck the documentation for pre-defined colors list at: https://github.com/sashaclimax/whatsappButton")
        }
    }

    isRGBColor(color){
        var colorValues = color.substring(4, (color.length-1)).split(',')
        var checkResult = true
        colorValues.forEach((valor) => {
            colorValues[colorValues.indexOf(valor)] = colorValues[colorValues.indexOf(valor)].trim()
            if((valor >= 0 && valor <=255) && (checkResult == true)){
                colorValues[colorValues.indexOf(valor)] = true
                checkResult = true
            } else {
                 checkResult = false
            }
        })

        if(checkResult
        && (colorValues.length == 3)){
            return true
        } else {
            return false
        }
    }

    isRBGAColor(color){
        var colorValues = color.substring(5, (color.length-1)).split(',')
        var checkResult = true

        colorValues.forEach((valor) => {
            colorValues[colorValues.indexOf(valor)] = colorValues[colorValues.indexOf(valor)].trim()
            if((valor >= 0 && valor <=255) 
            && (checkResult == true)){
                colorValues[colorValues.indexOf(valor)] = true
                checkResult = true
            } else {
                 checkResult = false
            }
        })

        if((checkResult) 
        && ((colorValues[3] >= 0) && (colorValues[3] <= 1))
        && (colorValues.length == 4)){
            return true
        } else {
            return false
        }
    }

    isSecureURL(URL){
        if((URL.substring(0,5) === 'https') 
        && (URL.includes('https://fonts.googleapis.com/css?family='))){
            return true
        } else {
            throw new Error('Custom font URL not compatible.\nPlease use Google Fonts API to select a font.\nFor more information, please\ncheck the documentation at https://github.com/sashaclimax/whatsappButton')
        }
    }

    extractFontFamily(URL){
        let fontName = URL.substring(40, URL.length).split('&')[0]

        if(fontName.includes('|')){
            throw new Error('Invalid font style. Please, use only one font style. For more information,\ncheck the documentation at: https://github.com/sashaclimax/whatsappButton')
        } else if(fontName.includes('+')){
            let matches = (fontName.split('+').length) - 1
            for(let i = 0; i < matches; i++){
                fontName = fontName.replace('+', ' ')
            }
            return fontName
        } else {
            return fontName
        }
    }

    setPhoneNumber(data){
        /* Valida o formato de numero de telefone */
        if(typeof(data) == "number"){
            data = data.toString()
        }

        if((!isNaN(data)) && (typeof(data) === "string")){
            if((data.includes('+'))){
                data = data.replace('+', '')
            } else if((data.includes('-'))){
                data = data.replace('-', '')
            }
            return data
        } else {
            throw new Error("Missing phone number or it has a wrong format. Please, use only numbers: eg. 5522123456789.\nFor more information, check the documentation at: https://github.com/sashaclimax/whatsappButton")
        }
    }

    setWelcomeMessage(data){
        if(typeof(data) !== "string"){
            data = data.toString()
        }
        return data;
    }

    /* 
     This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>

        Developed by Alexsander Alves (https://github.com/sashaclimax)
        The developer does not claim any copyright related to whatsappButton.js plugin since it is an open-source software
    */

}