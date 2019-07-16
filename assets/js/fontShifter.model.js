export default class FontShifter{

    constructor(){
        this.fontList = new Array('Alfa+Slab+One','Bungee','Knewave','Monoton','Playball','Press+Start+2P','Righteous','Sigmar+One')
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

    getFontURL(fontStyle){
        return `https://fonts.googleapis.com/css?family=${fontStyle}&display=swap`
    }

    
}