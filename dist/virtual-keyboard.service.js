"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ReplaySubject_1 = require("rxjs/internal/ReplaySubject");
var VirtualKeyboardService = /** @class */ (function () {
    function VirtualKeyboardService() {
        this.shift$ = new ReplaySubject_1.ReplaySubject(1);
        this.capsLock$ = new ReplaySubject_1.ReplaySubject(1);
        this.caretPosition$ = new ReplaySubject_1.ReplaySubject(1);
        this.capsLock = false;
        this.shift = false;
    }
    /**
     * Setter for Shift value, note that this also sets CapsLock value.
     *
     * @param {boolean} value
     */
    VirtualKeyboardService.prototype.setShift = function (value) {
        this.shift = value;
        this.shift$.next(this.shift);
        this.setCapsLock(this.shift);
    };
    /**
     * Setter for CapsLock value
     *
     * @param {boolean} value
     */
    VirtualKeyboardService.prototype.setCapsLock = function (value) {
        this.capsLock = value;
        this.capsLock$.next(value);
    };
    /**
     * Toggle for Shift, note that this also toggles CapsLock
     */
    VirtualKeyboardService.prototype.toggleShift = function () {
        this.shift = !this.shift;
        this.shift$.next(this.shift);
        this.setCapsLock(this.shift);
    };
    /**
     * Toggle for CapsLock
     */
    VirtualKeyboardService.prototype.toggleCapsLock = function () {
        this.capsLock = !this.capsLock;
        this.capsLock$.next(this.capsLock);
    };
    /**
     * Setter for caret position value.
     *
     * @param {number}  position
     */
    VirtualKeyboardService.prototype.setCaretPosition = function (position) {
        this.caretPosition$.next(position);
    };
    /**
     * Method to reset Shift and CapsLock values to default ones.
     */
    VirtualKeyboardService.prototype.reset = function () {
        this.setShift(false);
    };
    VirtualKeyboardService = __decorate([
        core_1.Injectable()
    ], VirtualKeyboardService);
    return VirtualKeyboardService;
}());
exports.VirtualKeyboardService = VirtualKeyboardService;
//# sourceMappingURL=virtual-keyboard.service.js.map