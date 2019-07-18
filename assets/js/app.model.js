import FontShifter from './fontShifter.model.js';
export default class App extends FontShifter{

    constructor(){
        super()
        this.phoneNumber = ''
        this.wMessage = ''
        this.phMessage = ''
        this.dMessage = ''
        this.iconStyle = ''
        this.mainColor = ''
        this.subColor = ''
        this.textColor = ''
        this.fontFamily = ''
        this.setBackground()
        this.setTitleFont();
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
        } else if((iconStyle == 1) || (iconStyle == 2)){
            $('.iconStyle')[0].setAttributeNS("http://www.w3.org/1999/xlink", 'xlink:href', `wpp_icons/My icons collection-SVG-sprite.svg#whatsapp-${iconStyle}`)
            $('#circle').css('fill', $('#mainColor').val())
            $('#path').css('fill', $('#mainColor').val())
            $('#subColor-noFill').css('fill', this.subColor)
        } else {
            $('.iconStyle')[0].setAttributeNS("http://www.w3.org/1999/xlink", 'xlink:href', `wpp_icons/My icons collection-SVG-sprite.svg#whatsapp-${iconStyle}`)
            $('#circle').css('fill', 'transparent')
            $('#path').css('fill', 'transparent')
        }
    }

    setMainColor(mainColor){
        if ((this.iconStyle == 1) || (this.iconStyle == 2)){
            $('.mainColor-fill').css('fill', mainColor)
        }
        $('.mainColor-bg').css('background-color', mainColor)
        $('body').css({
            'background': mainColor,
            'transition': 'background-color 4s'})
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
                'transition': 'background-color 4s'})
        }
        this.subColor = subColor;
    }

    setTextColor(textColor){
        $('.textColor').css('color', textColor)
        this.textColor = textColor;
    }

    setFontFamily(fontFamily){
        //Esta nova versão do método, também verifica se a fonte escolhida é válida antes de estilizar
        //Para a versão da UI, existe a possibilidade de escolher a fonte apenas pelo Nome.
        if($('#fontLink')){
            $('#fontLink').remove()
        }
        var counter = 0;
        if(this.isSecureURL(fontFamily)
        && this.extractFontFamily(fontFamily)){
            var url = fontFamily
            var fontName = this.extractFontFamily(url)
            var result = false
            $.ajax({
                url: fontFamily,
                cache: false
                })
                .done(function() {
                    $('<link>',{
                        id: 'fontLink',
                        rel: 'stylesheet',
                        type: 'text/css',
                        href: fontFamily
                    }).appendTo('head')
                    $('.fontFamily').css('font-family', fontName)
                    result = true
                });
            $('.lds-ring').css('opacity', 1)
            let tries = setInterval(() => {
                if(counter < 4){
                    if(result == true){
                        this.fontFamily = fontFamily
                        this.setValid('#fontFamily')
                        $('.lds-ring').css('opacity', 0)
                        clearInterval(tries)
                    } else {
                        counter++
                        $.ajax({
                            url: fontFamily,
                            cache: false
                            })
                            .done(function() {
                                $('<link>',{
                                    id: 'fontLink',
                                    rel: 'stylesheet',
                                    type: 'text/css',
                                    href: fontFamily
                                }).appendTo('head')
                                $('.fontFamily').css('font-family', fontName)
                                result = true
                            });
                    }
                } else {
                    $('.lds-ring').css('opacity', 0)
                    this.setInvalid('#fontFamily')
                    clearInterval(tries)
                }
            }, 1500);
        } else if (this.isSecureURL(this.mountFontURL(fontFamily))
         && this.extractFontFamily(this.mountFontURL(fontFamily))){
            var url = this.mountFontURL(this.extractFontFamily(fontFamily))
            var fontName = this.extractFontFamily(fontFamily)
            var refinedFontName = this.extractFontFamily(fontName)
            var result = false
            $.ajax({
                url: url,
                cache: false
                })
                .done(function() {
                    $('<link>',{
                        id: 'fontLink',
                        rel: 'stylesheet',
                        type: 'text/css',
                        href: url
                    }).appendTo('head')
                    $('.fontFamily').css('font-family', refinedFontName)
                    result = true
                });
                $('.lds-ring').css('opacity', 1)
                let tries = setInterval(() => {
                    if(counter < 4){
                        if(result == true){
                            this.fontFamily = url
                            this.setValid('#fontFamily')
                            $('.lds-ring').css('opacity', 0)
                            clearInterval(tries)
                        } else {
                            counter++
                            $.ajax({
                                url: url,
                                cache: false
                                })
                                .done(function() {
                                    $('<link>',{
                                        id: 'fontLink',
                                        rel: 'stylesheet',
                                        type: 'text/css',
                                        href: url
                                    }).appendTo('head')
                                    $('.fontFamily').css('font-family', refinedFontName)
                                    result = true
                                });
                        }
                    } else {
                        $('.lds-ring').css('opacity', 0)
                        this.setInvalid('#fontFamily')
                        clearInterval(tries)
                    }
                }, 1500);
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
        if((URL.substring(0,5) === 'https')){
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
        } else{
            if(URL.includes(' ')){
                let matches = (URL.split(' ').length) - 1
                for(let i = 0; i < matches; i++){
                    URL = URL.replace(' ', '+')
                }
                return URL
            } else if(URL.includes('+')){
                let matches = (URL.split('+').length) - 1
                for(let i = 0; i < matches; i++){
                    URL = URL.replace('+', ' ')
                }
                return URL
            } else {
                return URL
            }
        }
        
        
    }

    mountFontURL(fontFamily){
        return `https://fonts.googleapis.com/css?family=${fontFamily}&display=swap`
    }

    selectNewFontStyle(){
        return super.selectNewFontStyle()
    }

    getFontURL(fontStyle){
        return super.getFontURL(this.selectNewFontStyle())
    }

    setTitleFont(){
        return super.setTitleFont(this.getFontURL(this.selectNewFontStyle()))
    }

    setBackground(){
        return super.setBackground()
    }

    setValid(element){
        if($(element).hasClass('is-invalid')) {$(element).removeClass('is-invalid')}
        if(!($(element).hasClass('is-valid'))) {
            $(element).addClass('is-valid')
        }
    }

    setInvalid(element){
        if($(element).hasClass('is-valid')) {$(element).removeClass('is-valid')}
        if(!($(element).hasClass('is-invalid'))) {
            $(element).addClass('is-invalid')
        }
    }

    removeValidation(element){
        if($(element).hasClass('is-invalid')) {$(element).removeClass('is-invalid')}
        if($(element).hasClass('is-valid')) {$(element).removeClass('is-valid')}
    }

    createButton(){
        if($('#form_checkbox').prop('checked')){
            $('#form_checkbox').prop('checked', !$('#form_checkbox').prop('checked'))
        }
        $('.app_panel_preview_button').css('animation', 'buttonCreated 3s ease-in-out .5s forwards')
        setTimeout(() => {
            new WhatsappButton(this.phoneNumber, this.wMessage, this.phMessage, this.dMessage, this.iconStyle, this.mainColor, this.subColor, this.textColor, this.fontFamily)
        }, 1000);
        let interval = setInterval(() => {
            if($('#whatsapp_wrapper').length){
                $('.app_panel_preview_button').css({opacity: '1',
                                                // animation: 'none'
                                            })
                clearInterval(interval)
            }
        }, 500)
    }
}