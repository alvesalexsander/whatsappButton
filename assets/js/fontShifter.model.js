export default class FontShifter{

    constructor(){
        this.fontList = new Array('Alfa+Slab+One', 'Slackey', 'Fascinate','Knewave','Monoton','Playball','Righteous','Sigmar+One')
        this.backgroundList = new Array('0','1','2','3','4','5','6','7','8','9','10','11','12','13','14')
        this.background = this.selectNewBackground()
        this.fontShifterResourcesURL = "https://alvesalexsander.github.io"
    }

    setTitleFont(URL){
        $('<link>',{
            id: 'titleFontLink',
            rel: 'stylesheet',
            type: 'text/css',
            href: URL
        }).appendTo('head')
        $('.title').css('font-family', this.extractFontFamily(URL))
        $('#menuTitle').css('font-family', this.extractFontFamily(URL))
    }

    selectNewFontStyle(){
        let selectedFont = Math.floor((Math.random()*(this.fontList.length)))
        selectedFont = this.fontList[selectedFont];
        return selectedFont;
    }

    setTitleBackground(){
        $('.title').css({background: `#fff url('${this.fontShifterResourcesURL}/whatsappButton/assets/img/${this.background}.png') top center no-repeat`,
                        'background-size': 'cover',
                        '-webkit-background-clip': 'text',
                        'background-clip': 'text',
                        color: 'transparent',
                        'font-weight': '1000'})
        $('.menu_expand').css({background: `url('${this.fontShifterResourcesURL}/whatsappButton/assets/img/${this.background}full.jpg') center center no-repeat`,
                        'background-size': 'cover'})
        if((this.background == 3) || (this.background == 13)){
            $('.menu_nav_title').css('color', '#444444')
        }
    }

    selectNewBackground(){
        let selectedBackground = Math.floor((Math.random()*(this.backgroundList.length)))
        return selectedBackground
    }

    getFontURL(fontStyle){
        return `https://fonts.googleapis.com/css?family=${fontStyle}&display=swap`
    }

}
