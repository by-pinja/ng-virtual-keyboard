import { OnInit, EventEmitter } from '@angular/core';
import { KeyPressInterface } from './key-press.interface';
export declare class VirtualKeyboardKeyComponent implements OnInit {
    key: string;
    disabled: boolean;
    keyPress: EventEmitter<KeyPressInterface>;
    special: boolean;
    spacer: boolean;
    flexValue: string;
    keyValue: string;
    icon: string;
    text: string;
    /**
     * Constructor of the class.
     */
    constructor();
    /**
     * On init life cycle hook, within this we'll initialize following properties:
     *  - special
     *  - keyValue
     *  - flexValue
     */
    ngOnInit(): void;
    /**
     * Method to check if key is disabled or not.
     *
     * @returns {boolean}
     */
    isDisabled(): boolean;
    /**
     * Method to handle actual "key" press from virtual keyboard.
     *  1) Key is "Special", process special key event
     *  2) Key is "Normal", append this key value to input
     */
    onKeyPress(): void;
}
