class WhatsappButton {

    //Propriedades principais

    phoneNumber = ''
    placeHolder_Message = "Como podemos te ajudar?"
    defaultMessage = "Olá! Estou entrando em contato e gostaria de saber:"
    HTMLElementsPairs = new Array();
    
    constructor(pNumber, phMessage, dMessage){
        //Inicia a class com valores personalizados para as
        //propriedades principais 
        this.phoneNumber = pNumber ? pNumber : this.pNumber
        this.placeHolder_Message = phMessage ? phMessage : this.placeHolder_Message
        this.defaultMessage = dMessage ? dMessage : this.defaultMessage

        //Iniciando elementos HTML
        this.initButtonElements();

        //Montando Arrays de pares [parent, child]
        this.mountButtonStructure();

        //Montando elementos HTML indexados com os pares [parent, child]
        document.body.appendChild(this.mountPairs());

    }

    newElem(tag, attr, attrValue, inHTML){
        //Cria a variável elem para referenciar ao elemento criado
        //a partir do parametro tag<string>
        var elem = document.createElement(tag)

        if(Array.isArray(attr)){
            //Testa se existe mais de um atributo para ser settado.
            //Caso exista, atribui ao elemento pareando os attr: string[] com os attrValue: string[] pelo índice
            for(let i = 0; i < attr.length; i++){
                elem.setAttribute(attr[i], attrValue[i])
            }

        } else {
            //Caso não exista mais de um atributo para ser settado,
            //Atribui apenas o attr: string simples ao attrValue: string simples
            elem.setAttribute(attr, attrValue)
        }

        if(elem.tagName == ("SPAN" || "H1" || "H2" || "H3")){
            elem.innerHTML = inHTML
        }

        // console.log(typeof(elem))

        let HTMLElem = document.body.appendChild(elem)
        document.body.removeChild(elem)

        return HTMLElem;
    }

    initButtonElements(){
        /* Método para iniciar os elementos HTML*/

        this.buttonWrapper = this.newElem("div", "class", "whatsapp_cta")
        this.inputCheckbox = this.newElem("input", ["id", "class", "type"], ["form_checkbox", "form_checkbox", "checkbox"])
        this.linkButton = this.newElem("a", ["class", "href"], ["whatsapp_button", "https://api.whatsapp.com/send?phone="+ this.phoneNumber +"&text=" + encodeURIComponent(this.defaultMessage.trim())])
        this.svgButton = this.newElem("svg", "class", "icon")
        this.svgButtonUse = this.newElem("use", ["xlink:href", "class"], ["wpp_icons/My icons collection-SVG-sprite.svg#whatsapp", "svgButtonUse"])
        this.hoverText = this.newElem("div", "class", "whatsapp_hover")
        this.spanHoverText = this.newElem("span", "class", "hover_text", "Fale conosco")
        this.formWrapper = this.newElem("div", "class", "whatsapp_form")
        this.buttonForm = this.newElem("form", ["class", "onsubmit"], ["form_container", "return sendMessage()"])
        this.textarea = this.newElem("textarea", ["id", "class", "name", "placeholder", "required"], ["message", "form_text", "mensagem", "Como podemos te ajudar?", ""])
        this.label = this.newElem("label", ["id", "class", "for"], ["send_label", "send_label", "send"])
        this.labelInput = this.newElem("input", ["id", "type", "name", "value", "class"], ["send", "submit", "send", "", "labelInput"])
        this.svgLabelSend = this.newElem("svg", "class", "icon_send")
        this.svgLabelUse = this.newElem("use", ["xlink:href", "class"], ["wpp_icons/My icons collection-SVG-sprite.svg#send-button", "svgLabelUse"])

        return window.sendMessage = this.sendMessage;
    }

    mountButtonStructure(){
        /* Este método mapeia os elementos HTML em um Map Object
        A partir dos pares [parent, child], o método monta a estrutura HTML do botão
        utilizando document.appendChild()
        */

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

        function attachPair(pair, parent, child){
        }

        this.HTMLElementsPairs.forEach((pair) => {
            pair[parent].appendChild(pair[child])
            mounted = pair[parent]
        })

        console.log(mounted)

        return mounted;
    }

    sendMessage(){
        var userInput = document.getElementById("message").value;
        userInput = encodeURIComponent(userInput.trim());
        var apiURL = "https://api.whatsapp.com/send?phone=5522997055388&text=" + userInput;
        window.open(apiURL, "height=200", "width=200");
        document.getElementById("message").value = "";
        return false;
    }
    
}

var run = new WhatsappButton();