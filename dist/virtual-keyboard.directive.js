"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var virtual_keyboard_component_1 = require("./virtual-keyboard.component");
var layouts_1 = require("./layouts");
var NgVirtualKeyboardDirective = (function () {
    /**
     * Constructor of the class.
     *
     * @param {ElementRef}  element
     * @param {MdDialog}    dialog
     */
    function NgVirtualKeyboardDirective(element, dialog) {
        this.element = element;
        this.dialog = dialog;
        this.opened = false;
    }
    NgVirtualKeyboardDirective.prototype.onFocus = function () {
        if (!this.opened) {
            this.element.nativeElement.dispatchEvent(new Event('click', { bubbles: true }));
        }
    };
    NgVirtualKeyboardDirective.prototype.onClick = function () {
        var _this = this;
        var dialogRef;
        dialogRef = this.dialog.open(virtual_keyboard_component_1.VirtualKeyboardComponent);
        dialogRef.componentInstance.inputElement = this.element;
        dialogRef.componentInstance.layout = this.getLayout();
        dialogRef.componentInstance.placeholder = this.getPlaceHolder();
        dialogRef
            .afterClosed()
            .subscribe(function () {
            setTimeout(function () {
                _this.opened = false;
            }, 0);
        });
        this.opened = true;
    };
    /**
     * Getter for used keyboard layout.
     *
     * @returns {KeyboardLayout}
     */
    NgVirtualKeyboardDirective.prototype.getLayout = function () {
        var layout;
        switch (this.layout) {
            case 'alphaNumeric':
                layout = layouts_1.alphaNumericKeyboard;
                break;
            case 'alphaNumericNordic':
                layout = layouts_1.alphaNumericNordicKeyboard;
                break;
            case 'extended':
                layout = layouts_1.extendedKeyboard;
                break;
            case 'extendedNordic':
                layout = layouts_1.extendedNordicKeyboard;
                break;
            case 'numeric':
                layout = layouts_1.numericKeyboard;
                break;
            case 'phone':
                layout = layouts_1.phoneKeyboard;
                break;
            default:
                layout = this.layout;
                break;
        }
        return layout;
    };
    /**
     * Getter for used placeholder for virtual keyboard input field.
     *
     * @returns {string}
     */
    NgVirtualKeyboardDirective.prototype.getPlaceHolder = function () {
        return this.placeholder ? this.placeholder : this.element.nativeElement.placeholder;
    };
    return NgVirtualKeyboardDirective;
}());
NgVirtualKeyboardDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[ng-virtual-keyboard]'
            },] },
];
/** @nocollapse */
NgVirtualKeyboardDirective.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
    { type: material_1.MdDialog, },
]; };
NgVirtualKeyboardDirective.propDecorators = {
    'layout': [{ type: core_1.Input, args: ['ng-virtual-keyboard-layout',] },],
    'placeholder': [{ type: core_1.Input, args: ['ng-virtual-keyboard-placeholder',] },],
    'onFocus': [{ type: core_1.HostListener, args: ['focus', ['$event'],] },],
    'onClick': [{ type: core_1.HostListener, args: ['click', ['$event'],] },],
};
exports.NgVirtualKeyboardDirective = NgVirtualKeyboardDirective;
//# sourceMappingURL=virtual-keyboard.directive.js.map