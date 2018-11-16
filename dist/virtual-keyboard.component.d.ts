import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { KeyboardLayout } from './layouts';
import { VirtualKeyboardService } from './virtual-keyboard.service';
import { KeyPressInterface } from './key-press.interface';
export declare class VirtualKeyboardComponent implements OnInit, OnDestroy {
    dialogRef: MatDialogRef<VirtualKeyboardComponent>;
    private virtualKeyboardService;
    keyboardInput: ElementRef;
    inputElement: ElementRef;
    layout: KeyboardLayout;
    placeholder: string;
    type: string;
    disabled: boolean;
    maxLength: number | string;
    private caretPosition;
    private shift;
    /**
     * Helper method to set cursor in input to correct place.
     *
     * @param {HTMLInputElement|HTMLTextAreaElement}  input
     * @param {number}                                start
     * @param {number}                                end
     */
    private static setSelectionRange;
    /**
     * Constructor of the class.
     *
     * @param {MatDialogRef<VirtualKeyboardComponent>} dialogRef
     * @param {VirtualKeyboardService}                 virtualKeyboardService
     */
    constructor(dialogRef: MatDialogRef<VirtualKeyboardComponent>, virtualKeyboardService: VirtualKeyboardService);
    /**
     * On init life cycle hook, this will do following:
     *  1) Set focus to virtual keyboard input field
     *  2) Subscribe to following
     *    2.1) Shift key, this is needed in keyboard event dispatches
     *    2.2) CapsLock key, this will change keyboard layout
     *    2.3) Caret position in virtual keyboard input
     *  3) Reset of possible previously tracked caret position
     */
    ngOnInit(): void;
    /**
     * On destroy life cycle hook, in this we want to reset virtual keyboard service states on following:
     *  - Shift
     *  - CapsLock
     */
    ngOnDestroy(): void;
    /**
     * Method to close virtual keyboard dialog
     */
    close(): void;
    /**
     * Method to update caret position. This is called on click event in virtual keyboard input element.
     */
    updateCaretPosition(): void;
    /**
     * Method to handle actual "key" press from virtual keyboard.
     *  1) Key is "Special", process special key event
     *  2) Key is "Normal"
     *    - Append this key value to input
     *    - Dispatch DOM events to input element
     *    - Toggle Shift key if it's pressed
     *
     * @param {KeyPressInterface} event
     */
    keyPress(event: KeyPressInterface): void;
    /**
     * Method to check is virtual keyboard input is disabled.
     */
    private checkDisabled;
    /**
     * Method to handle "normal" key press event, this will add specified character to input value.
     *
     * @param {string}  keyValue
     */
    private handleNormalKey;
    /**
     * Method to handle "Special" key press events.
     *  1) Enter
     *  2) Escape, close virtual keyboard
     *  3) Backspace, remove last character from input value
     *  4) CapsLock, toggle current layout state
     *  6) Shift, toggle current layout state
     *  5) SpaceBar
     */
    private handleSpecialKey;
    /**
     * Method to dispatch necessary keyboard events to current input element.
     *
     * @see https://w3c.github.io/uievents/tools/key-event-viewer.html
     *
     * @param {KeyPressInterface} event
     */
    private dispatchEvents;
}
