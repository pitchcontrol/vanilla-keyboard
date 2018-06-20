import {Keyboard} from './src/keyboard.js'

let keyboard = new Keyboard('input', {hideDelay: null});

keyboard.show();

keyboard.currentElement.addEventListener('input', (event) => {
    console.log(keyboard+'', event)
});
