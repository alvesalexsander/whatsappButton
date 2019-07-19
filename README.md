# whatsappButton.js
*Em desenvolvimento*<br>

## Presentation
<br>whatsappButton.js is a plugin made with javascript that creates a interactive button for your web aplications.
<br>It is easy-to-use, customizable and resilient.

Try it out at: https://sashaclimax.github.io/whatsappButton/
We have a friendly user interface for you!

## **[Download it from here!](https://github.com/sashaclimax/whatsappButton.js)**

------------------------------------------------

## Table of contents

1. [Features](#features)
2. [Usage](#usage)
3. [Building](#building)
4. [Configuration](#configuration)
5. [Known bugs](#known-bugs)
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
 <br>There is no other dependency that a web browser capable of parsing JavaScript ES6 and CSS3 to run *whatsappButton.js*.
 
 **2. Instantiation Parameters** - WhatsappButton is the class that handles some parameters at object instantiation.<br>These parameters are in charge of shaping up the button layout.

### Parameters
hese are the options supported on the INI file (not found boolean options are defaulted to false):

| Parameter | Type               | Description                                                                          |
|---------|----------------------|--------------------------------------------------------------------------------------|
| pNumber | string(preffered), number | { true, false }  If not true,'customLanguage' will be ignored.                       |
| General | customLanguage       | { en, es, de, fr, it } Ignores the console's language and use this one.              |
| General | keysPath             | { (path starting with "/") } Key file path, defaults to "/switch/prod.keys".         |
| UI      | romfsReplace         | { true, false } If not true, 'romfsReplacePath' will be ignored.                     |
| UI      | romfsReplacePath     | { (path starting with "/") } Path to search RomFs resources, if it's a valid one.    |
| UI      | useCustomColors      | { true, false } If not true, colors' options will be ignored.                        |
| UI      | colorBackground      | { (color in 4 bytes, example: "55,125,255,255") } Background color.                  |
| UI      | colorBase            | { (color in 4 bytes, example: "55,125,255,255") } Base display color.                |
| UI      | colorBaseFocus       | { (color in 4 bytes, example: "55,125,255,255") } Base display  color, when focused. |
| UI      | colorText            | { (color in 4 bytes, example: "55,125,255,255") } Text color.                        |
| UI      | useCustomSizes       | { true, false } If not true, sizes' options will be ignored.                         |
| UI      | fileBrowserItemsSize | { (number, divisible by 5) } Size of the items on file browsers, 50 by default.      |
