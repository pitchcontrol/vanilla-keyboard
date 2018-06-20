import {Keyboard} from './src/keyboard.js'

let keyboard = new Keyboard('', {hideDelay: null});

keyboard.show();

keyboard.currentElement.addEventListener('input', (event) => {
    console.log(keyboard+'', event)
});
