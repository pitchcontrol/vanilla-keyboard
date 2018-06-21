import {Keyboard} from './src/keyboard.js'

let keyboard = new Keyboard('input', {hideDelay: null, value: 'dadada'});

keyboard.show();

keyboard.currentElement.addEventListener('input', (event) => {
    console.log(keyboard + '', event)
});

// keyboard.delete();