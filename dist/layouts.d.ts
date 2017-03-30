export declare type KeyboardLayout = Array<Array<string>>;
export declare const alphaNumericKeyboard: KeyboardLayout;
export declare const alphaNumericNordicKeyboard: KeyboardLayout;
export declare const extendedKeyboard: KeyboardLayout;
export declare const extendedNordicKeyboard: KeyboardLayout;
export declare const numericKeyboard: KeyboardLayout;
export declare const phoneKeyboard: KeyboardLayout;
/**
 * Function to change specified layout to CapsLock layout.
 *
 * @param {KeyboardLayout}  layout
 * @param {boolean}         caps
 * @returns {KeyboardLayout}
 */
export declare function keyboardCapsLockLayout(layout: KeyboardLayout, caps: boolean): KeyboardLayout;
