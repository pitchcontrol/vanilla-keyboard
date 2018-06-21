import {Keyboard} from './src/keyboard.js'

let keyboard = new Keyboard('input', {hideDelay: null, value: 'dadada', lang: 'EN'});

keyboard.show();

keyboard.currentElement.addEventListener('input', (event) => {
    console.log(keyboard + '', event)
});

//keyboard.clear();
// keyboard.delete();
setTimeout(function () {
    keyboard.changeLanguage();
}, 3000);
