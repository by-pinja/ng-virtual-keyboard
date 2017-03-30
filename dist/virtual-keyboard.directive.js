"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    }
    NgVirtualKeyboardDirective.prototype.onClick = function (event) {
        var dialogRef;
        dialogRef = this.dialog.open(virtual_keyboard_component_1.VirtualKeyboardComponent);
        dialogRef.componentInstance.inputElement = this.element;
        dialogRef.componentInstance.layout = this.getLayout();
        dialogRef.componentInstance.placeholder = this.getPlaceHolder();
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
__decorate([
    core_1.Input('ng-virtual-keyboard-layout'),
    __metadata("design:type", Object)
], NgVirtualKeyboardDirective.prototype, "layout", void 0);
__decorate([
    core_1.Input('ng-virtual-keyboard-placeholder'),
    __metadata("design:type", String)
], NgVirtualKeyboardDirective.prototype, "placeholder", void 0);
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], NgVirtualKeyboardDirective.prototype, "onClick", null);
NgVirtualKeyboardDirective = __decorate([
    core_1.Directive({
        selector: '[ng-virtual-keyboard]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        material_1.MdDialog])
], NgVirtualKeyboardDirective);
exports.NgVirtualKeyboardDirective = NgVirtualKeyboardDirective;
//# sourceMappingURL=virtual-keyboard.directive.js.map