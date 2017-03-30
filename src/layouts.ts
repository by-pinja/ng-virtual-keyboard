export type KeyboardLayout = Array<Array<string>>;

export const alphaNumericKeyboard: KeyboardLayout = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace:2'],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'CapsLock:2'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Spacer', 'Shift:2'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'Spacer:5'],
];

export const alphaNumericNordicKeyboard: KeyboardLayout = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Spacer', 'Backspace:2'],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'å', 'CapsLock:2'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ö', 'ä', 'Shift:2'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'Spacer:6'],
];

export const extendedKeyboard: KeyboardLayout = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',  'Backspace:2'],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'CapsLock:2'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Spacer', 'Shift:2'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-', '_', '+'],
  ['Spacer', '@', 'SpaceBar:7', '#', 'Spacer:2'],
];

export const extendedNordicKeyboard: KeyboardLayout = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', 'Backspace:2'],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'å', 'CapsLock:2'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ö', 'ä', 'Shift:2'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '-', '_', 'Spacer:2'],
  ['Spacer', '@', 'SpaceBar:7', '#', 'Spacer:3'],
];

export const numericKeyboard: KeyboardLayout = [
  ['1', '2', '3', 'Backspace:2'],
  ['4', '5', '6', 'Spacer:2'],
  ['7', '8', '9', 'Spacer:2'],
  ['Spacer', '0', 'Spacer:3'],
];

export const phoneKeyboard: KeyboardLayout = [
  ['1', '2', '3', 'Backspace:2'],
  ['4', '5', '6', 'Spacer:2'],
  ['7', '8', '9', 'Spacer:2'],
  ['-', '0', '+', 'Spacer:2'],
];

/**
 * Function to change specified layout to CapsLock layout.
 *
 * @param {KeyboardLayout}  layout
 * @param {boolean}         caps
 * @returns {KeyboardLayout}
 */
export function keyboardCapsLockLayout(layout: KeyboardLayout, caps: boolean): KeyboardLayout {
  return layout.map((row: Array<string>): Array<string> => {
    return row.map((key: string): string => {
      return (key.length === 1) ? (caps ? key.toUpperCase() : key.toLowerCase()) : key;
    });
  });
}
