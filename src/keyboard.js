import defaultKeyboard from './defaultKeyboard.js'

export class Keyboard {
    constructor(input, settings = {}) {
        if (input instanceof HTMLElement) {
            this.currentElement = input;
        }
        else {
            this.currentElement = document.querySelector(input);
        }
        this.layout = document.createElement('div');
        this.layout.classList.add('on-screen-keyboard-layout');
        this.settings = Object.assign({
            lang: "RU",
            buttonClass: "button",
            onclick: "write",
            keyClass: "key",
            text: {
                close: "close"
            },
            hideDelay: 5000
        }, settings);
        this.keyboard = {"default": defaultKeyboard};
        this.generateKeyboard("default");
    }

    generate(key) {
        let dataClick = "";
        let text;
        let bClass = key.buttonClass === undefined ? this.settings.buttonClass : key.buttonClass;
        let kClass = key.keyClass === undefined ? this.settings.keyClass : key.keyClass;
        if (key.onclick === undefined) {
            dataClick = 'data-key=' + key.value;
        } else {
            dataClick = 'data-click=' + key.onclick;
        }
        text = (key.isChar !== undefined || key.isChar === false) ? key.value : String.fromCharCode(key.value);

        return `<div ${key.width === undefined ? "" : "style=\"width:" + key.width + " !important;\""} class="${bClass}" ${dataClick}><div class="${kClass}">${text}</div></div>`;
    }

    generateKeyboard(keyboard) {
        let self = this;

        let s = "";
        s += "<div class='keyboard'><div class='keyboardHeader'><span></span></div>";

        /*small letter */
        s += "<div class='keyboardSmallLetter'>";
        this.keyboard[keyboard].smallLetter.forEach(function (key) {
            s += self.generate(key);
        });
        s += "</div>";

        /*capital letter*/
        s += "<div class='keyboardCapitalLetter'>";
        this.keyboard[keyboard].capitalLetter.forEach(function (key) {
            s += self.generate(key);
        });
        s += "</div>";

        /*en small letter */
        s += "<div class='keyboardEnSmallLetter'>";
        this.keyboard[keyboard].enSmallLetter.forEach(function (key) {
            s += self.generate(key);
        });
        s += "</div>";

        /*en capital letter*/
        s += "<div class='keyboardEnCapitalLetter'>";
        this.keyboard[keyboard].enCapitalLetter.forEach(function (key) {
            s += self.generate(key);
        });
        s += "</div>";

        /*number*/
        s += "<div class='keyboardNumber'>";
        this.keyboard[keyboard].number.forEach(function (key) {
            s += self.generate(key);
        });
        s += "</div>";

        /*symbols*/
        s += "<div class='keyboardSymbols'>";
        this.keyboard[keyboard].symbols.forEach(function (key) {
            s += self.generate(key);
        });
        s += "</div>";

        this.layout.innerHTML = s;
        this.layout.addEventListener('click', (event) => {
            if (event.target) {
                let key = event.target.dataset.key || event.target.parentNode.dataset.key;
                if (key !== undefined) {
                    this.write(key);
                    return;
                }
                let click = event.target.dataset.click || event.target.parentNode.dataset.click;
                if (click !== undefined) {
                    this[click]();
                }
            } else
                this.updateCursor();
        });
        this.currentElement.addEventListener('input', (event) => {
            this.layout.querySelector('.on-screen-keyboard-layout .keyboardHeader>span').innerText = this.currentElement.value;
            this.show();
        });
        this.currentElement.addEventListener('focus', event => {
            this.show();
        });
    }

    hideBlocks(array) {
        array.forEach(item => {
            document.querySelector(item).style.display = 'none';
        });
    }

    showBlocks(array) {
        array.forEach(item => {
            document.querySelector(item).style.display = 'block';
        });
    }

    changeToSmallLetter() {
        this.hideBlocks([".on-screen-keyboard-layout .keyboardCapitalLetter",
            ".on-screen-keyboard-layout .keyboardNumber",
            ".on-screen-keyboard-layout .keyboardSymbols",
            ".on-screen-keyboard-layout .keyboardEnCapitalLetter",
            ".on-screen-keyboard-layout .keyboardEnSmallLetter"]);
        this.showBlocks([".on-screen-keyboard-layout .keyboardSmallLetter"]);
        this.updateCursor();
    }

    changeToCapitalLetter() {
        this.showBlocks([".on-screen-keyboard-layout .keyboardCapitalLetter"]);
        this.hideBlocks([".on-screen-keyboard-layout .keyboardSmallLetter",
            ".on-screen-keyboard-layout .keyboardNumber",
            ".on-screen-keyboard-layout .keyboardSymbols",
            ".on-screen-keyboard-layout .keyboardEnCapitalLetter",
            ".on-screen-keyboard-layout .keyboardEnSmallLetter"]);
        this.updateCursor();
    }

    changeToEnSmallLetter() {
        this.hideBlocks([".on-screen-keyboard-layout .keyboardCapitalLetter",
            ".on-screen-keyboard-layout .keyboardNumber",
            ".on-screen-keyboard-layout .keyboardSymbols",
            ".on-screen-keyboard-layout .keyboardEnCapitalLetter",
            ".on-screen-keyboard-layout .keyboardSmallLetter"]);
        this.showBlocks([".on-screen-keyboard-layout .keyboardEnSmallLetter"]);
        this.updateCursor();
    }

    changeToEnCapitalLetter() {
        this.showBlocks([".on-screen-keyboard-layout .keyboardEnCapitalLetter"]);
        this.hideBlocks([".on-screen-keyboard-layout .keyboardSmallLetter",
            ".on-screen-keyboard-layout .keyboardNumber",
            ".on-screen-keyboard-layout .keyboardSymbols",
            ".on-screen-keyboard-layout .keyboardCapitalLetter",
            ".on-screen-keyboard-layout .keyboardEnSmallLetter"]);
        this.updateCursor();
    }

    changeToNumber() {
        this.showBlocks([".on-screen-keyboard-layout .keyboardNumber"]);
        this.hideBlocks([".on-screen-keyboard-layout .keyboardSymbols",
            ".on-screen-keyboard-layout .keyboardCapitalLetter",
            ".on-screen-keyboard-layout .keyboardSmallLetter",
            ".on-screen-keyboard-layout .keyboardEnCapitalLetter",
            ".on-screen-keyboard-layout .keyboardEnSmallLetter"]);
        this.updateCursor();
    }

    changeToSymbols() {
        this.hideBlocks([".on-screen-keyboard-layout .keyboardCapitalLetter",
            ".on-screen-keyboard-layout .keyboardNumber",
            ".on-screen-keyboard-layout .keyboardSmallLetter",
            ".on-screen-keyboard-layout .keyboardEnCapitalLetter",
            ".on-screen-keyboard-layout .keyboardEnSmallLetter"]);
        this.showBlocks([".on-screen-keyboard-layout .keyboardSymbols"]);
        this.updateCursor();
    }

    del() {
        this.currentElementCursorPosition = this.currentElement.selectionStart;
        const a = this.currentElement.value,
            pos = this.currentElementCursorPosition;
        let output = a;
        if (pos > 0) output = [a.slice(0, pos - 1), a.slice(pos)].join('');
        this.currentElement.value = output;
        if (this.currentElementCursorPosition > 0) this.currentElementCursorPosition--; //-1 cursor
        this.updateCursor();
    }

    space() {
        this.currentElementCursorPosition = this.currentElement.selectionStart;
        let a = this.currentElement.value,
            b = " ",
            pos = this.currentElementCursorPosition;
        this.currentElement.value = [a.slice(0, pos), b, a.slice(pos)].join('');
        this.currentElementCursorPosition++; //+1 cursor
        this.updateCursor();
    }

    writeSpecial(m) {
        let a = this.currentElement.value,
            b = String.fromCharCode(m),
            pos = this.currentElementCursorPosition;
        this.currentElement.value = [a.slice(0, pos), b, a.slice(pos)].join('');
        this.currentElementCursorPosition++; //+1 cursor
        this.updateCursor();
    }

    show() {
        if (!document.body.contains(this.layout))
            document.body.appendChild(this.layout);
        this.refreshTimeOut();
    }

    refreshTimeOut() {
        if (this.settings.hideDelay == null || this.settings.hideDelay === 0)
            return;
        clearTimeout(this.timeOut);
        this.timeOut = setTimeout(() => this.hide(), this.settings.hideDelay)
    }

    hide() {
        document.body.removeChild(this.layout);
    }

    write(m) {
        this.currentElementCursorPosition = this.currentElement.selectionStart;
        let a = this.currentElement.value,
            b = String.fromCharCode(m),
            pos = this.currentElementCursorPosition;
        // this.updateCursor();
        this.currentElement.value = [a.slice(0, pos), b, a.slice(pos)].join('');
        this.currentElementCursorPosition++; //+1 cursor
        this.updateCursor();
    }

    updateCursor() {
        this.refreshTimeOut();
        //input cursor focus and position during typing
        this.currentElement.setSelectionRange(this.currentElementCursorPosition, this.currentElementCursorPosition);
        this.currentElement.focus();
        // this.layout.querySelector('.on-screen-keyboard-layout .keyboardHeader>span').innerText = this.currentElement.value;
        // this.currentElement.dispatchEvent(new CustomEvent("writeKeyboard", {detail: {value: this.currentElement.value}}));
        this.currentElement.dispatchEvent(new Event('input'));
    }

    toString() {
        return this.currentElement.value;
    }
}