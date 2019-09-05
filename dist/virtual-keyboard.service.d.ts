import { ReplaySubject } from "rxjs/internal/ReplaySubject";
export declare class VirtualKeyboardService {
    shift$: ReplaySubject<boolean>;
    capsLock$: ReplaySubject<boolean>;
    caretPosition$: ReplaySubject<number>;
    private capsLock;
    private shift;
    /**
     * Setter for Shift value, note that this also sets CapsLock value.
     *
     * @param {boolean} value
     */
    setShift(value: boolean): void;
    /**
     * Setter for CapsLock value
     *
     * @param {boolean} value
     */
    setCapsLock(value: boolean): void;
    /**
     * Toggle for Shift, note that this also toggles CapsLock
     */
    toggleShift(): void;
    /**
     * Toggle for CapsLock
     */
    toggleCapsLock(): void;
    /**
     * Setter for caret position value.
     *
     * @param {number}  position
     */
    setCaretPosition(position: number): void;
    /**
     * Method to reset Shift and CapsLock values to default ones.
     */
    reset(): void;
}
