export default class App {

    constructor(){
        this.phoneNumber = ''
        this.wMessage = ''
        this.phMessage = ''
        this.dMessage = ''
        this.iconStyle = ''
        this.mainColor = ''
        this.subColor = ''
        this.textColor = ''
        this.fontFamily = ''
    }

    validatePhoneNumber(phoneNumber){
        if(typeof(phoneNumber) == "number"){
            phoneNumber = phoneNumber.toString()
        }

        if((!isNaN(phoneNumber)) && (typeof(phoneNumber) === "string") && (phoneNumber != '')){
            if($('#phoneNumber').hasClass('is-invalid')) {$('#phoneNumber').removeClass('is-invalid')}
            if(!($('#phoneNumber').hasClass('is-valid'))) {
                $('#phoneNumber').addClass('is-valid')
                $('#createButton').removeAttr('disabled')
            }
            this.setPhoneNumber(phoneNumber)
        } else {
            if($('#phoneNumber').hasClass('is-valid')) {$('#phoneNumber').removeClass('is-valid')}
            if(!($('#phoneNumber').hasClass('is-invalid'))) {
                $('#phoneNumber').addClass('is-invalid')
                $('#createButton').attr('disabled', 'disabled')
            }
        }
    }

    setPhoneNumber(phoneNumber){
        this.phoneNumber = phoneNumber
    }

    setWMessage(wMessage){
        $('.wMessage').html(wMessage)
        this.wMessage = wMessage
    }

    setPhMessage(phMessage){
        $('.phMessage').attr('placeholder', phMessage);
        this.phMessage = phMessage
    }

    setDMessage(dMessage){
        this.dMessage = dMessage
    }

    setIconStyle(iconStyle){    
        this.iconStyle = iconStyle
        if((iconStyle == 0)){
            $('.iconStyle')[0].setAttributeNS("http://www.w3.org/1999/xlink", 'xlink:href', `wpp_icons/My icons collection-SVG-sprite.svg#whatsapp`)
            $('#circle').css('fill', 'transparent')
            $('#path').css('fill', 'transparent')
        } else if((iconStyle == 3)) {
            $('.iconStyle')[0].setAttributeNS("http://www.w3.org/1999/xlink", 'xlink:href', `wpp_icons/My icons collection-SVG-sprite.svg#whatsapp-${iconStyle}`)
            $('#circle').css('fill', $('#mainColor').val())
            $('#path').css('fill', $('#mainColor').val())
            $('#subColor-noFill').css('fill', '#000000')
        } else {
            $('.iconStyle')[0].setAttributeNS("http://www.w3.org/1999/xlink", 'xlink:href', `wpp_icons/My icons collection-SVG-sprite.svg#whatsapp-${iconStyle}`)
            $('#circle').css('fill', $('#mainColor').val())
            $('#path').css('fill', $('#mainColor').val())
        }
    }

    setMainColor(mainColor){
        if ((this.iconStyle == 1) || (this.iconStyle == 2)){
            $('.mainColor-fill').css('fill', mainColor)
        }
        $('.mainColor-bg').css('background-color', mainColor)
        $('.app').css({
            'background': mainColor,
            'transition': 'background-color 14s'})
        this.mainColor = mainColor
    }

    setSubColor(subColor){
        if(this.iconStyle == 3){
            $('.subColor-border').css('border-color', subColor)
            $('.subColor-fill').css('fill', '#000000')
            $('#subColor-fill-3').css('fill', subColor)
            $('body').css('background', subColor)
        } else {
            $('.subColor-fill').css('fill', subColor)
            $('.subColor-border').css('border-color', subColor)
            $('body').css({
                'background': subColor,
                'transition': 'background-color 14s'})
        }
        this.subColor = subColor;
    }

    setTextColor(textColor){
        $('.textColor').css('color', textColor)
        this.textColor = textColor;
    }

    setFontFamily(fontFamily){
        if($('#fontLink')){
            $('#fontLink').remove()
        }
        if(this.isSecureURL(fontFamily) && this.extractFontFamily(fontFamily)){
            $('<link>',{
                id: 'fontLink',
                rel: 'stylesheet',
                type: 'text/css',
                href: fontFamily
            }).appendTo('head')
            $('.fontFamily').css('font-family', this.extractFontFamily(fontFamily))
            this.fontFamily = fontFamily
        }
    }

    isSecureURL(URL){
        if((URL.substring(0,5) === 'https') 
        && (URL.includes('https://fonts.googleapis.com/css?family='))){
            return true
        } else {
            return false
        }
    }

    extractFontFamily(URL){
        let fontName = URL.substring(40, URL.length).split('&')[0]

        if(fontName.includes('|')){
            return false
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

    createButton(){
        return new WhatsappButton(this.phoneNumber, this.wMessage, this.phMessage, this.dMessage, this.iconStyle, this.mainColor, this.subColor, this.textColor, this.fontFamily)
    }
}