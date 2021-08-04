"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alphanumericKeyboard = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace:2'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'CapsLock:2'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Spacer', 'Shift:2'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'Spacer:5'],
];
exports.alphanumericNordicKeyboard = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Spacer', 'Backspace:2'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'å', 'CapsLock:2'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ö', 'ä', 'Shift:2'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'Spacer:6'],
];
exports.extendedKeyboard = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace:2'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'CapsLock:2'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Spacer', 'Shift:2'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-', '_', '+'],
    ['Spacer', '@', 'SpaceBar:7', '#', 'Spacer:2'],
];
exports.extendedNordicKeyboard = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', 'Backspace:2'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'å', 'CapsLock:2'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ö', 'ä', 'Shift:2'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-', '_', 'Spacer:2'],
    ['Spacer', '@', 'SpaceBar:7', '#', 'Spacer:3'],
];
exports.numericKeyboard = [
    ['1', '2', '3', 'Backspace:2'],
    ['4', '5', '6', 'Spacer:2'],
    ['7', '8', '9', 'Spacer:2'],
    ['Spacer', '0', 'Spacer:3'],
];
exports.phoneKeyboard = [
    ['1', '2', '3', 'Backspace:2'],
    ['4', '5', '6', 'Spacer:2'],
    ['7', '8', '9', 'Spacer:2'],
    ['-', '0', '+', 'Spacer:2'],
];
exports.specialKeys = [
    'Enter',
    'Backspace',
    'Escape',
    'CapsLock',
    'SpaceBar',
    'Spacer',
    'Shift',
];
exports.specialKeyIcons = {
    Enter: 'keyboard_return',
    Backspace: 'backspace',
    Escape: 'close',
    SpaceBar: 'space_bar',
    Shift: 'keyboard_capslock'
};
exports.specialKeyTexts = {
    CapsLock: 'Caps'
};
exports.notDisabledSpecialKeys = [
    'Enter',
    'Backspace',
    'Escape',
];
/**
 * Helper function to determine if given key is 'Spacer' or not.
 *
 * @param {string}  key
 * @returns {boolean}
 */
function isSpacer(key) {
    if (key.length > 1) {
        return /^Spacer(:(\d+(\.\d+)?))?$/g.test(key);
    }
    return false;
}
exports.isSpacer = isSpacer;
/**
 * Helper function to determine if given key is special or not.
 *
 * @param {string}  key
 * @returns {boolean}
 */
function isSpecial(key) {
    if (key.length > 1) {
        return !!exports.specialKeys.filter(function (specialKey) {
            var pattern = new RegExp("^(" + specialKey + ")(:(\\d+(\\.\\d+)?))?$", 'g');
            return pattern.test(key);
        }).length;
    }
    return false;
}
exports.isSpecial = isSpecial;
/**
 * Function to change specified layout to CapsLock layout.
 *
 * @param {KeyboardLayout}  layout
 * @param {boolean}         caps
 * @returns {KeyboardLayout}
 */
function keyboardCapsLockLayout(layout, caps) {
    return layout.map(function (row) {
        return row.map(function (key) {
            return isSpecial(key) ? key : (caps ? key.toUpperCase() : key.toLowerCase());
        });
    });
}
exports.keyboardCapsLockLayout = keyboardCapsLockLayout;
//# sourceMappingURL=layouts.js.map