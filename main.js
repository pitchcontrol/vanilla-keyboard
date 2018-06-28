import {Keyboard} from './src/keyboard.js'

let keyboard = new Keyboard('input', {hideDelay: 30, value: 'dadada', lang: 'EN'});

keyboard.show();

keyboard.currentElement.addEventListener('input', (event) => {
    console.log(keyboard + '', event)
});

//keyboard.clear();
setTimeout(()=>{
    keyboard.delete();
}, 5000);
// setTimeout(function () {
//     keyboard.changeLanguage();
// }, 3000);
