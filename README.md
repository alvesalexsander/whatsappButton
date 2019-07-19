# whatsappButton.js
*still in development*<br>

## Presentation
<br>whatsappButton.js is a plugin made with javascript that creates a interactive button for your web aplications.
<br>It is easy-to-use, customizable and resilient.

Try it out at: https://sashaclimax.github.io/whatsappButton/
<br>We have a friendly user interface for you!

## **[Download it from here!](https://github.com/sashaclimax/whatsappButton.js)**

------------------------------------------------

## Table of contents

1. [Features](#features)
2. [Usage](#usage)
3. [Building](#building)
4. [User Interface](#user-interface)
6. [Credits and support](#credits-and-support)


## Features

whatsappButton.js is a tool that will provide a new way to get to your public through the internet.

Here is some info about it:

- **Dependency-free**:  Built with pure javascript and css. No need of match other dependencies to have your *whatsappButton.js*.

- **Highly customizable**:  *whatsappButton.js* wears the colors and fits along with your product.<br>Create personalized phrases to welcome your public, pick the color of your choice to style your button and, of course, a font style to carry your message!

- **Easy-to-use**:  Your users will be a click away from you. And you, a few little steps to implement.<br>*whatsappButton.js* is ready for deployment.

- **Open-source code**:  This is an open-source project. It means that you are free to download, edit and share improvements.<br>If possible, please credit the original author.

- **Friendly UI**:  Use our user interface that helps your on the creative process of your button. It will help you at setting and shaping up your button.<br>Check it out at: https://sashaclimax.github.io/whatsappButton/

------------------------------------------------

## Usage

How To Use:

- **1.** Download plugin files at: whatsappButton.js page OR Use the CDN Links: 
https://sashaclimax.github.io/whatsappButton.js/dist/wpp_css/whatsappButton.css https://sashaclimax.github.io/whatsappButton.js/dist/wpp_js/whatsappButton.js 

- **2.** Link the .CSS file with a link tag in the head tag of your application. 

- **3.** Link the .JS file with a script tag in the head or body tags of your application. 

- **4.** Use the User Interface at https://sashaclimax.github.io/whatsappButton/ to create your button layout 
OR check the [Building](#building) section for further information.

- **5.** At the end of the creation process, the UI will give you an javascript code like this one:
<br><br>
new WhatsappButton('5522123456789', 'Could we help you?', 'We are at your service! Want help at choosing a wine? Any other thing we could help?', 'netWinez, could we help?', '1', '#6f2045', '#000000', '', 'https://fonts.googleapis.com/css?family=Satisfy&display=swap')<br><br>
Then, you can call your created button on any .js file or in a <script> tag.
  
------------------------------------------------

## Building

This section is a more techinical insight that explains how the whatsappButton.js works

 **1. Technology Stack** - The plugin is fully developed with front-end technology. Made with Vanilla JavaScript and CSS Rules.
 <br>There is no other dependency that a web browser capable of parsing JavaScript ES6 and CSS3 specifications to run *whatsappButton.js*.
 
 **2. Instantiation Parameters** - WhatsappButton is the class that handles some parameters at object instantiation.<br>These parameters are in charge of shaping up the button layout.

### Parameters
These are the parameters in sequence of object instantiation:

| Parameter  | Type                          | Description                                                                            |
|------------|-------------------------------|----------------------------------------------------------------------------------------|
| pNumber *  | string(preferred), number     | Enter only numbers of an phone number to received messages. For example: 5522123456789 |
| wMessage   | string                        | Will be displayed when mouse is over the button. Recommended: <=16 characters.         |
| phMessage  | string                        | This one will be shown while the user didn't type in the input field yet.              |
| dMessage   | string                        | At mobile, Whatsapp will be automatically launch with this message in chat input field |
| iconStyle  | string(preferred), number     | Pick an icon style of your choice. Values 0-4.                                         |
| color      | string(#xxxxxx/#xxx/rgb/rgba) | Pick a main color for the backgrounds. HEX and rgb/rgba formats are supported.         |
| subColor   | string(#xxxxxx/#xxx/rgb/rgba) | Pick a main color for the details. HEX and rgb/rgba formats are supported.             |
| textColor  | string(#xxxxxx/#xxx/rgb/rgba) | Pick a color for the texts. HEX and rgb/rgba formats are supported.                    |
| fontFamily | string(Google Fonts Name/URL) | Enter a font name or font URL from any of the available ** at **[Google Fonts API](https://fonts.google.com/)**.<br>For example: 'Squada One' or 'https://fonts.googleapis.com/css?family=Squada+One&display=swap'|

**pNumber** * - It is the only <strong>required</strong> parameter. Buttons called with this minimal requirement will have the default style applied.
<br>Please, do not enter symbols or other characters than numbers in this parameter field.

**fontFamily** ** - For some reason, Press Start 2P is a known font style that does not work well.
<br>It is possible that there may be a few more incompatible font styles.
<br><br>
These are the basic building informations about whatsappButton.js plugin.
<br>Please, feel free to download and explore more about it.
<br>If you have any tips, report or compliment(or complain) to add, do not hesitate to contact us.
<br>You can e-mail the author at: alvesalexsander@live.com OR contato@alexsanderalves.com

![Dafault Closed](whatsappButton/assets/documentation_images/default_style_closed.png)

------------------------------------------------

## User Interface
