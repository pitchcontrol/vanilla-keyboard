# vanilla-keyboard
## introduction
Vanilla-keyboard is a pure-js RU-EN on-screen keyboard which appears after the user clicks on an input element.
## How to use it
```js
//es-module syntaxis
import {Keyboard} from './src/keyboard.js'
//or from global script
//<script src="index.min.js"></script>
let Keyboard = VanillaKeyboard.Keyboard;
let keyboard = new Keyboard('input', {hideDelay: 30, value: 'dadada', lang: 'EN'});
keyboard.show();
// subscribe an input event
keyboard.currentElement.addEventListener('input', (event) => {
    console.log(keyboard + '', event)
});
```
## Options
* autoFocus: bool - Set focus after create instance Keyboard(default: true).
* hideDelay: number - Hiding keyboard timeout(default: 5000).
* lang: string "RU"|"EN" - Language layout(default: RU).
## Methods
* show() - To show the keyboard.
* hide() - To hide the keyboard.
* changeLanguage() - To change language from one to another.
* delete() - To unsubscribe all eventlisteners and delete elements.
