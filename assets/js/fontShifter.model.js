export default class FontShifter{

    constructor(){
        this.fontList = new Array('Alfa+Slab+One','Knewave','Monoton','Playball','Press+Start+2P','Righteous','Sigmar+One')
        this.backgroundList = new Array('0','1','2','3','4','5','6','7')
    }

    setTitleFont(URL){
        $('<link>',{
            id: 'titleFontLink',
            rel: 'stylesheet',
            type: 'text/css',
            href: URL
        }).appendTo('head')
        $('#title').css('font-family', this.extractFontFamily(URL))
    }

    selectNewFontStyle(){
        let selectedFont = Math.floor((Math.random()*(this.fontList.length)))
        selectedFont = this.fontList[selectedFont];
        return selectedFont;
    }

    setTitleBackground(){
        $('#title').css({background: `#fff url('https://sashaclimax.github.io/whatsappButton/assets/img/${this.selectNewBackground()}.png') top center no-repeat`,
                        'background-size': 'cover',
                        '-webkit-background-clip': 'text',
                        'background-clip': 'text',
                        color: 'transparent',
                        'font-weight': '1000'})
    }

    selectNewBackground(){
        let selectedBackground = Math.floor((Math.random()*(this.backgroundList.length)))
        return selectedBackground
    }

    getFontURL(fontStyle){
        return `https://fonts.googleapis.com/css?family=${fontStyle}&display=swap`
    }

    
}