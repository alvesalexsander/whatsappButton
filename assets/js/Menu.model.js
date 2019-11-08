export default class Menu{

    aboutContent = "whatsappButton.js is a front-end plugin that comes to help developers implement a communication channel using the WhatsApp Web API for their clients.<br><br>It is easy to deploy and highly customizable!"
    documentationContent = "Documentation explains more about the features and general usage of the plugin.<br><br>It also contains details of the plugin's building process.<br><br>Check it out <a href='https://github.com/alvesalexsander/whatsappButton'>here!</a>"
    creditsContent = "I'd like to thank everyone that helped on this plugin and the developers/designers of the amazing resources I used on this project:<ul><li><a href='http://jscolor.com/'>jscolor</a> by Jan Odvárko – East Desire</li><li><a href='https://www.flaticon.com/authors/google'>SVG icons</a> by Google</li><li><a href='https://www.flaticon.com/authors/freepik'>SVG icons</a> by Freepik</li><li><a href='https://www.flaticon.com/authors/smashicons'>SVG icons</a> by Smashicons</li><li><a href='https://www.flaticon.com/authors/pixel-perfect'>SVG icons</a> by Pixel perfect</li></ul>"
    contactContent = "Hello! My name is Alexsander Alves. I am the developer behind whatsappButton.js.<br><br>Here are some contacts where you can find me:<br>E-mail: alvesalexsander@live.com<br>Github: <a href='https://github.com/alvesalexsander'>https://github.com/alvesalexsander</a>"

    constructor(){
    }

    hoveredButton(elem){
        $(elem).hover(() =>{
            $(elem).toggleClass('hoveredButton')
        })    
    }

    selectedButton(elem){
        var closeMark = '<span id="closeMark" style="pointer-events: none"> | X</span>'
        if($('.selectedButton').length == 0){
            let timer = setTimeout(() => {
                $(elem).addClass('selectedButton')
                $(elem).append(closeMark)
                
                clearTimeout(timer)
            }, 200);
            if($('.front-content').html() == ''){
                $('.front-content').html(this.selectContent(elem))
                $('.menu_nav_content-front').css('transform', 'scale(1)')
                $('.menu_nav_title').css('opacity', '.3')
            } else {
                $('.front-content').html(this.selectContent(elem))
            }

        } else if($(elem).hasClass('selectedButton')){
            $(elem).removeClass('selectedButton')
            $('#closeMark').remove()
            $('.menu_nav_content-front').css('transform', 'scale(0)')
            $('.menu_nav_title').css('opacity', '1')
            $('.front-content').html('')
        } else {
            $('#closeMark').remove()
            $('.selectedButton').removeClass('selectedButton')
            this.selectedButton(elem)
        }
    }

    selectContent(elem){
        switch(elem){
            case '#menuAbout': 
                return this.aboutContent
            case '#menuDocumentation':
                return this.documentationContent
            case '#menuCredits':
                return this.creditsContent
            case '#menuContact':
                return this.contactContent
        }
    }
}
