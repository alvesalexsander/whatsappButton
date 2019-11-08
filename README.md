# *whatsappButton.js*
v1.0.6
Main changes:
- Changed metric system from rem to px for extensible compatibility.

------------------------------------------------

## Presentation
<br>*whatsappButton.js* is a plugin made with javascript that creates a interactive button for your web aplications.
<br>It is easy-to-use, customizable and resilient.

Try it out at: https://alvesalexsander.github.io/whatsappButton/
<br>We have a friendly user interface to help you!

## **[Install via NPM!](https://npmjs.com/package/whatsapp-button.js)** running command: npm install whatsapp-button.js
## **[Download files from here!](https://github.com/alvesalexsander/whatsapp-button.js)**

------------------------------------------------

## Table of contents

1. [Features](#features)
2. [Usage](#usage)
3. [Building](#building)
4. [User Interface](#user-interface)
6. [Credits and support](#credits-and-support)


## Features

*whatsappButton.js* is a tool that will provide a new way to get to your public through the internet.

Here is some information about it:

- **Dependency-free**:  Built with pure javascript and css. No need to match other dependencies to have your *whatsappButton.js* live.

- **Highly customizable**:  *whatsappButton.js* wears the colors and fits along with your product.<br>Create personalized phrases to welcome your public, pick the color of your choice to style your button and, of course, a font style to carry your message!

- **Easy-to-use**:  Your users will be a click away from you. And you, just a few little steps to implementation.<br>*whatsappButton.js* is ready for deployment.

- **Open-source code**:  This is an open-source project. It means that you are free to download, edit and share improvements.<br>If possible, please credit the original author.

- **Friendly UI**:  Use our user interface that helps you on the creative process of your button. It will help you at setting and shaping up your button.<br>Check it out at: https://alvesalexsander.github.io/whatsappButton/

------------------------------------------------

## Usage

How To Use:

- **1.** **[Install via NPM!](https://npmjs.com/package/whatsapp-button.js)**: npm install whatsapp-button.js 

OR

Download plugin files at: **[whatsappButton.js page](https://github.com/alvesalexsander/whatsapp-button.js)** and put it inside your *node_modules* folder (**path must to be node_modules/whatsapp-button.js**).

- **2.** Link the .CSS file or [CDN .CSS URL](https://unpkg.com/whatsapp-button.js/dist/wpp_css/whatsappButton.min.css) with a link element in the head tag of your application. 

- **3.** Link the .JS file or [CDN .JS URL](https://unpkg.com/whatsapp-button.js/dist/wpp_js/whatsappButton.min.js) with a script element in the head or body tags of your application. 

- **4.** Use the User Interface at https://alvesalexsander.github.io/whatsappButton/ to create your button layout 

OR

Check the [Building](#building) section for further information.

- **5.** At the end of the creation process, the UI will present you an javascript code like this one:

new WhatsappButton('5522123456789', 'Could we help you?', 'We are at your service! Want help at choosing a wine? Any other thing we could help?', 'netWinez, can we help?', '1', '#6f2045', '#000000', '', 'https://fonts.googleapis.com/css?family=Satisfy&display=swap')

Then, you can call the code shown on any .js file or in a script element to create your button.
<br>*Compatible with Google Chrome, Mozilla Firefox, Microsoft Edge and the most modern browsers.*
  
------------------------------------------------

## Building

This section is a more technical insight that explains how the *whatsappButton.js* works.

 **1. Technology Stack** - The plugin is fully developed with front-end technology. Made with Vanilla JavaScript and CSS Rules.
 <br>There is no other dependency than a web browser capable of parsing JavaScript ES5 (ES6 version is also available) and CSS3 specifications to run *whatsappButton.js*.
<br>*Compatible with Google Chrome, Mozilla Firefox, Microsoft Edge and the most modern browsers.*
 
 **2. Instantiation Parameters** - WhatsappButton is the class that handles some parameters at object instantiation.<br>These parameters are in charge of shaping up the button layout.

### Parameters
These are the parameters in sequence of object instantiation:
<br>*new* **WhatsappButton**(pNumber, wMessage, phMessage, dMessage, iconStyle, color, subColor, textColor, fontFamily)


| Parameter  | Type                          | Description                                                                            |
|------------|-------------------------------|----------------------------------------------------------------------------------------|
| pNumber *  | string(preferred), number     | Enter only numbers of a phone number to received messages. For example: 5522123456789  |
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
**3. Default styles**:
<br>
![Default Closed](https://alvesalexsander.github.io/whatsappButton/assets/documentation_images/default_style_closed.png)
<br>
![Default Opened](https://alvesalexsander.github.io/whatsappButton/assets/documentation_images/default_style_opened.PNG)
<br><br>
These are the basic building informations about *whatsappButton.js* plugin.
<br>Please, feel free to download and explore more about it.
<br>If you have any tips, report or compliment(or complain) to add, do not hesitate to contact us.
<br>You can e-mail the author at: alvesalexsander@live.com OR contato@alexsanderalves.com

------------------------------------------------

## User Interface

This is the *whatsappButton.js* User Interface.
<br>
<br>
![User Interface0](https://alvesalexsander.github.io/whatsappButton/assets/documentation_images/social_preview_0_subbed.png)
<br>
<br>
![User Interface1](https://alvesalexsander.github.io/whatsappButton/assets/documentation_images/social_preview_1_subbed.png)
<br>
<br>The UI will help you with a live-preview version of your button. You can sneak peek at it before creating.
<br>It was and is tested often to ensure a fail-proof result at creating your button.
<br>
<br>When you are finished, click on the "I've done. Make my Button!" and the UI will make an instance of your ready-to-use whatsappButton! You may test your button to see how it works at will!
<br>For last, the UI will also display instructions of how to use your button.
<br>And if you did not liked the final result, a "Reset" button will become available, so you can restart right away where you stopped!
<br>
<br>
![User Interface2](https://alvesalexsander.github.io/whatsappButton/assets/documentation_images/social_preview_2_subbed.png)

------------------------------------------------

## Credits and support

Hi, my name is Alexsander Alves and I am a front-end developer.
<br>I am the developer behind *whatsappButton.js* plugin.
<br>
<br>First of all, I would like to thank you for coming and seeing my job. It is very valuable to me.
<br>My purpose working on this project is to bring to the community a solid and at the same time flexible solution on establishing a good and beautiful communication channel with their public.
<br>*whatsappButton.js* is meant to be simple and effective at what is has born to be: connecting people.
<br>
<br>I would appreciate if you use it, test it, share your thoughts and spread the plugin.
<br>Just like I said before, you all are welcome to participate bringing new ideias to *whatsappButton.js*!

A great thanks for this amazing tools used at *whatsappButton.js*:
<br>HEX Color picker by jscolor - http://jscolor.com/
<br>Free SVG Icons by FlatIcon - https://www.flaticon.com/
<br>Icons by Font Awesome - https://github.com/FortAwesome/Font-Awesome | https://fontawesome.com/

