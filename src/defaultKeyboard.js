export default {
    enCapitalLetter:
        [
            // 1st row
            {value: 81}, {value: 87}, {value: 69}, {value: 82}, {value: 84}, {value: 89}, {value: 85}, {value: 73}, {value: 79}, {value: 80},
            {
                value: "&larr;",
                isChar: false,
                onclick: "del",
                buttonClass: "button button_del",
                keyClass: "key key_del",
                width: "188px"
            },
            // 2nd row
            {
                value: 65,
                buttonClass: "button row-2nd"
            }, {value: 83}, {value: 68}, {value: 70}, {value: 71}, {value: 72}, {value: 74}, {value: 75}, {value: 76},
            {
                value: "OK",
                isChar: false,
                buttonClass: "button button_special",
                onclick: "enter",
                keyClass: "key key_enter",
                width: "196px"
            },
            // 3rd row
            {
                value: "abc",
                isChar: false,
                buttonClass: "button button_special row-3rd",
                onclick: "changeToEnSmallLetter",
                keyClass: "key key_smallletter"
            },
            {value: 90}, {value: 88}, {value: 67}, {value: 86}, {value: 66}, {value: 78}, {value: 77}, {value: 44}, {value: 46}, {value: 64},
            // 4th row
            {
                value: "РУС",
                isChar: false,
                buttonClass: "button button_special row-4th",
                onclick: "changeToCapitalLetter",
                keyClass: "key key_number",
                width: "74px"
            },
            {
                value: "123",
                isChar: false,
                buttonClass: "button button_special",
                onclick: "changeToNumber",
                keyClass: "key key_number",
                width: "129px"
            },
            {
                value: "",
                isChar: false,
                buttonClass: "button button_special",
                onclick: "space",
                keyClass: "key key_space",
                width: "376px"
            },
            {
                value: "#%+",
                isChar: false,
                buttonClass: "button button_special",
                onclick: "changeToSymbols",
                keyClass: "key key_symbols",
                width: "129px"
            }
        ],
    enSmallLetter: [
        // 1st row
        {value: 113}, {value: 119}, {value: 101}, {value: 114}, {value: 116}, {value: 121}, {value: 117}, {value: 105}, {value: 111}, {value: 112},
        {
            value: "&larr;",
            isChar: false,
            onclick: "del",
            buttonClass: "button button_del",
            keyClass: "key key_del",
            width: "188px"
        },
        // 2nd row
        {
            value: 97,
            buttonClass: "button row-2nd"
        }, {value: 115}, {value: 100}, {value: 102}, {value: 103}, {value: 104}, {value: 106}, {value: 107}, {value: 108},
        {
            value: "OK",
            isChar: false,
            buttonClass: "button button_special",
            onclick: "enter",
            keyClass: "key key_enter",
            width: "196px"
        },
        // 3rd row
        {
            value: "ABC",
            isChar: false,
            buttonClass: "button button_special row-3rd",
            onclick: "changeToEnCapitalLetter",
            keyClass: "key key_capitalletterleft"
        },
        {value: 122}, {value: 120}, {value: 99}, {value: 118}, {value: 98}, {value: 110}, {value: 109}, {value: 44}, {value: 46}, {value: 64},
        // 4th row
        {
            value: "РУС",
            isChar: false,
            buttonClass: "button button_special row-4th",
            onclick: "changeToSmallLetter",
            keyClass: "key key_number",
            width: "74px"
        },
        {
            value: "123",
            isChar: false,
            buttonClass: "button button_special",
            onclick: "changeToNumber",
            keyClass: "key key_number",
            width: "129px"
        },
        {
            value: "",
            isChar: false,
            buttonClass: "button button_special",
            onclick: "space",
            keyClass: "key key_space",
            width: "376px"
        },
        {
            value: "#%+",
            isChar: false,
            buttonClass: "button button_special",
            onclick: "changeToSymbols",
            keyClass: "key key_symbols",
            width: "129px"
        }
    ],
    capitalLetter:
        [
            // 1st row
            {value: 1049}, {value: 1062}, {value: 1059}, {value: 1050}, {value: 1045}, {value: 1053}, {value: 1043}, {value: 1064}, {value: 1065}, {value: 1047}, {value: 1061}, {value: 1066},
            {
                value: "&larr;",
                isChar: false,
                onclick: "del",
                buttonClass: "button button_del",
                keyClass: "key key_del",
                width: "103px"
            },
            // 2nd row
            {
                value: 1060,
                buttonClass: "button row-2nd"
            }, {value: 1067}, {value: 1042}, {value: 1040}, {value: 1055}, {value: 1056}, {value: 1054}, {value: 1051}, {value: 1044}, {value: 1046}, {value: 1069},
            {
                value: "OK",
                isChar: false,
                buttonClass: "button button_special",
                onclick: "enter",
                keyClass: "key key_enter",
                width: "103px"
            },
            // 3rd row
            {
                value: "abc",
                isChar: false,
                buttonClass: "button button_special row-3rd",
                onclick: "changeToSmallLetter",
                keyClass: "key key_smallletter"
            },
            {value: 1071}, {value: 1063}, {value: 1057}, {value: 1052}, {value: 1048}, {value: 1058}, {value: 1068}, {value: 1041}, {value: 1070}, {value: 1025},
            // 4th row
            {
                value: "ENG",
                isChar: false,
                buttonClass: "button button_special row-4th",
                onclick: "changeToEnCapitalLetter",
                keyClass: "key key_number",
                width: "74px"
            },
            {
                value: "123",
                isChar: false,
                buttonClass: "button button_special",
                onclick: "changeToNumber",
                keyClass: "key key_number",
                width: "129px"
            },
            {
                value: "",
                isChar: false,
                buttonClass: "button button_special",
                onclick: "space",
                keyClass: "key key_space",
                width: "376px"
            },
            {
                value: "#%+",
                isChar: false,
                buttonClass: "button button_special",
                onclick: "changeToSymbols",
                keyClass: "key key_symbols",
                width: "129px"
            }
        ],
    smallLetter: [
        // 1st row
        {value: 1081}, {value: 1094}, {value: 1091}, {value: 1082}, {value: 1077}, {value: 1085}, {value: 1075}, {value: 1096}, {value: 1097}, {value: 1079}, {value: 1093}, {value: 1098},
        {
            value: "&larr;",
            isChar: false,
            onclick: "del",
            buttonClass: "button button_del",
            keyClass: "key key_del",
            width: "103px"
        },
        // 2nd row
        {
            value: 1092,
            buttonClass: "button row-2nd"
        }, {value: 1099}, {value: 1074}, {value: 1072}, {value: 1087}, {value: 1088}, {value: 1086}, {value: 1083}, {value: 1076}, {value: 1078}, {value: 1101},
        {
            value: "OK",
            isChar: false,
            buttonClass: "button button_special",
            onclick: "enter",
            keyClass: "key key_enter",
            width: "103px"
        },
        // 3rd row
        {
            value: "ABC",
            isChar: false,
            buttonClass: "button button_special row-3rd",
            onclick: "changeToCapitalLetter",
            keyClass: "key key_capitalletterleft"
        },
        {value: 1103}, {value: 1095}, {value: 1089}, {value: 1084}, {value: 1080}, {value: 1090}, {value: 1100}, {value: 1073}, {value: 1102}, {value: 1105},
        // 4th row
        {
            value: "ENG",
            isChar: false,
            buttonClass: "button button_special row-4th",
            onclick: "changeToEnSmallLetter",
            keyClass: "key key_number",
            width: "74px"
        },
        {
            value: "123",
            isChar: false,
            buttonClass: "button button_special",
            onclick: "changeToNumber",
            keyClass: "key key_number",
            width: "129px"
        },
        {
            value: "",
            isChar: false,
            buttonClass: "button button_special",
            onclick: "space",
            keyClass: "key key_space",
            width: "376px"
        },
        {
            value: "#%+",
            isChar: false,
            buttonClass: "button button_special",
            onclick: "changeToSymbols",
            keyClass: "key key_symbols",
            width: "129px"
        }
    ],
    number: [
        // 1st row
        {value: 49}, {value: 50}, {value: 51}, {value: 52}, {value: 53}, {value: 54}, {value: 55}, {value: 56}, {value: 57}, {value: 48},
        {
            value: "&larr;",
            isChar: false,
            onclick: "del",
            buttonClass: "button button_del",
            keyClass: "key key_del",
            width: "88px"
        },
        // 2nd row
        {
            value: 45,
            buttonClass: "button row-2nd"
        }, {value: 47}, {value: 58}, {value: 59}, {value: 40}, {value: 41}, {value: 36}, {value: 38}, {value: 64},
        {
            value: "OK",
            isChar: false,
            buttonClass: "button button_special",
            onclick: "enter",
            keyClass: "key key_enter",
            width: "106px"
        },
        //3rd row
        {
            value: 63,
            buttonClass: "button row-3rd"
        }, {value: 33}, {value: 34}, {value: 124}, {value: 92}, {value: 42}, {value: 61}, {value: 43}, {value: 46},

        // 4th row
        {
            value: "ABC",
            isChar: false,
            buttonClass: "button button_special row-4th",
            onclick: "changeToCapitalLetter",
            keyClass: "key key_capitalletterleft",
            width: "212px"
        },
        {
            value: "",
            isChar: false,
            buttonClass: "button button_special",
            onclick: "space",
            keyClass: "key key_space",
            width: "376px"
        },
        {
            value: "#%+",
            isChar: false,
            buttonClass: "button button_special",
            onclick: "changeToSymbols",
            keyClass: "key key_symbols",
            width: "129px"
        }
    ],
    symbols: [
        // 1st row
        {value: 91}, {value: 93}, {value: 123}, {value: 125}, {value: 35}, {value: 37}, {value: 94}, {value: 42}, {value: 43}, {value: 61},
        {
            value: "&larr;",
            isChar: false,
            onclick: "del",
            buttonClass: "button button_del",
            keyClass: "key key_del",
            width: "88px"
        },
        // 2nd row
        {
            value: 95,
            buttonClass: "button row-2nd"
        }, {value: 92}, {value: 124}, {value: 126}, {value: 60}, {value: 62},
        {
            value: 164,
        }, {value: 163}, {value: 165},
        {
            value: "OK",
            isChar: false,
            buttonClass: "button button_special",
            onclick: "enter",
            keyClass: "key key_enter",
            width: "106px"
        },
        // 3rd row
        {
            value: 46,
            buttonClass: "button row-3rd"
        }, {value: 44}, {value: 63}, {value: 33}, {value: 39}, {value: 34}, {value: 59}, {value: 92}, {value: 64},
        // 4th row
        {
            value: "123",
            isChar: false,
            buttonClass: "button button_special row-4th",
            onclick: "changeToNumber",
            keyClass: "key key_number",
            width: "212px"
        },
        {
            value: "",
            isChar: false,
            buttonClass: "button button_special",
            onclick: "space",
            keyClass: "key key_space",
            width: "376px"
        },
        {
            value: "ABC",
            isChar: false,
            buttonClass: "button button_special",
            onclick: "changeToCapitalLetter",
            keyClass: "key key_capitalletterleft",
            width: "129px"
        },
    ]
}