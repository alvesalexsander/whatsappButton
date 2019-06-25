class WhatsappButton {

    //Propriedades principais

    phoneNumber = ''
    placeHolder_Message = "Como podemos te ajudar?"
    defaultMessage = "Olá! Estou entrando em contato e gostaria de saber:"

    //Propriedades para os blocos HTML

    // htmlNodes = {
    //     buttonWrapper: this.newElem("div", "class", "whatsapp_cta"),
    //     inputCheckbox: this.newElem("input", ["id", "class", "type"], ["form_checkbox", "form_checkbox", "checkbox"]),
    //     linkButton: this.newElem("a", ["class", "href"], ["whatsapp_button", "https://api.whatsapp.com/send?phone="+ this.phoneNumber +"&text=" + encodeURIComponent(this.defaultMessage.trim())]),
    //     svgButton: this.newElem("svg", "class", "icon"),
    //     svgButtonUse: this.newElem("use", "xlink:href", "wpp_icons/My icons collection-SVG-sprite.svg#whatsapp"),
    //     hoverText: this.newElem("div", "class", "whatsapp_hover"),
    //     spanHoverText: this.newElem("span", "class", "hover_text", "Fale conosco"),
    //     formWrapper: this.newElem("div", "class", "whatsapp_form"),
    //     buttonForm: this.newElem("form", ["class", "onsubmit"], ["form_container", "return sendMessage()"]),
    //     textarea: this.newElem("textarea", ["id", "class", "name", "placeholder", "required"], ["message", "form_text", "mensagem", "Como podemos te ajudar?", ""]),
    //     label: this.newElem("label", ["id", "class", "for"], ["send_label", "send_label", "send"]),
    //     labelInput: this.newElem("input", ["id", "type", "name", "value"], ["send", "submit", "send", ""]),
    //     svgLabelSend: this.newElem("svg", "class", "icon_send"),
    //     svgLabelUse: this.newElem("use", "xlink:href", "wpp_icons/My icons collection-SVG-sprite.svg#send-button"),
    // }
    
    constructor(pNumber, phMessage, dMessage){
        //Inicia a class com valores personalizados para as
        //propriedades principais 
        this.phoneNumber = pNumber ? pNumber : this.pNumber
        this.placeHolder_Message = phMessage ? phMessage : this.placeHolder_Message
        this.defaultMessage = dMessage ? dMessage : this.defaultMessage
        console.log(this.phoneNumber + " " + this.placeHolder_Message + " " + this.defaultMessage);

        this.init()
        console.log(delete this.init());
    }

    init(){
        
        //Iniciando elementos HTML
        var buttonWrapper = this.newElem("div", "class", "whatsapp_cta")
        var inputCheckbox = this.newElem("input", ["id", "class", "type"], ["form_checkbox", "form_checkbox", "checkbox"])
        var linkButton = this.newElem("a", ["class", "href"], ["whatsapp_button", "https://api.whatsapp.com/send?phone="+ this.phoneNumber +"&text=" + encodeURIComponent(this.defaultMessage.trim())])
        var svgButton = this.newElem("svg", "class", "icon")
        var svgButtonUse = this.newElem("use", "xlink:href", "wpp_icons/My icons collection-SVG-sprite.svg#whatsapp")
        var hoverText = this.newElem("div", "class", "whatsapp_hover")
        var spanHoverText = this.newElem("span", "class", "hover_text", "Fale conosco")
        var formWrapper = this.newElem("div", "class", "whatsapp_form")
        var buttonForm = this.newElem("form", ["class", "onsubmit"], ["form_container", "return sendMessage()"])
        var textarea = this.newElem("textarea", ["id", "class", "name", "placeholder", "required"], ["message", "form_text", "mensagem", "Como podemos te ajudar?", ""])
        var label = this.newElem("label", ["id", "class", "for"], ["send_label", "send_label", "send"])
        var labelInput = this.newElem("input", ["id", "type", "name", "value"], ["send", "submit", "send", ""])
        var svgLabelSend = this.newElem("svg", "class", "icon_send")
        var svgLabelUse = this.newElem("use", "xlink:href", "wpp_icons/My icons collection-SVG-sprite.svg#send-button")
        
        
        console.log("iniciado com sucesso")
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

        console.log(elem)

        return elem;
    }
    
}

var run = new WhatsappButton();