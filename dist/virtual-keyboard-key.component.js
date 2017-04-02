"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var VirtualKeyboardKeyComponent = (function () {
    /**
     * Constructor of the class.
     */
    function VirtualKeyboardKeyComponent() {
        this.keyPress = new core_1.EventEmitter();
        this.special = false;
        this.spacer = false;
        this.supportedSpecialKeys = [
            'Enter',
            'Backspace',
            'Escape',
            'CapsLock',
            'SpaceBar',
            'Spacer',
            'Shift',
        ];
        this.icons = {
            Enter: 'keyboard_return',
            Backspace: 'backspace',
            Escape: 'close',
            SpaceBar: 'space_bar',
            Shift: 'keyboard_capslock'
        };
        this.texts = {
            CapsLock: 'Caps'
        };
        this.notDisabled = [
            'Enter',
            'Backspace',
            'Escape',
        ];
    }
    /**
     * On init life cycle hook, within this we'll initialize following properties:
     *  - disabled
     *  - special
     *  - keyValue
     *  - flexValue
     */
    VirtualKeyboardKeyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var multiplier = 1;
        var fix = 0;
        if (this.key.length > 1) {
            this.spacer = /^Spacer(:(\d+))?$/g.test(this.key);
            this.special = !!this.supportedSpecialKeys.filter(function (specialKey) {
                var pattern = new RegExp("^(" + specialKey + ")(:([0-9]))?$");
                return pattern.test(_this.key);
            }).length;
            var matches = /^(\w+)(:(\d+))?$/g.exec(this.key);
            this.keyValue = matches[1];
            if (matches[3]) {
                multiplier = parseInt(matches[3], 10);
                fix = (multiplier - 1) * 4;
            }
        }
        else {
            this.keyValue = this.key;
        }
        if (this.special) {
            if (this.icons.hasOwnProperty(this.keyValue)) {
                this.icon = this.icons[this.keyValue];
            }
            else {
                this.text = this.texts[this.keyValue];
            }
        }
        this.flexValue = multiplier * 64 + fix + "px";
    };
    /**
     * Method to check if key is disabled or not.
     *
     * @returns {boolean}
     */
    VirtualKeyboardKeyComponent.prototype.isDisabled = function () {
        if (this.spacer) {
            return true;
        }
        else if (this.disabled && this.notDisabled.indexOf(this.keyValue) !== -1) {
            return false;
        }
        else {
            return this.disabled;
        }
    };
    /**
     * Method to handle actual "key" press from virtual keyboard.
     *  1) Key is "Special", process special key event
     *  2) Key is "Normal", append this key value to input
     */
    VirtualKeyboardKeyComponent.prototype.onKeyPress = function () {
        this.keyPress.emit({ special: this.special, keyValue: this.keyValue, key: this.key });
    };
    return VirtualKeyboardKeyComponent;
}());
VirtualKeyboardKeyComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'virtual-keyboard-key',
                template: "\n    <button\n      md-raised-button\n      color=\"primary\"\n      fxFlex=\"{{ flexValue }}\"\n      [class.spacer]=\"spacer\"\n      [disabled]=\"isDisabled()\"\n      (click)=\"onKeyPress()\"\n    >\n      <span *ngIf=\"!special\">{{ keyValue }}</span>\n    \n      <span *ngIf=\"special\">\n        <md-icon *ngIf=\"icon\">{{ icon }}</md-icon>\n    \n        {{ text }}\n      </span>\n    </button>\n  ",
                styles: ["\n    .mat-button,\n    .mat-icon-button,\n    .mat-raised-button {\n      min-width: 64px;\n      min-height: 64px;\n      padding: 0;\n      margin: 2px;\n      font-size: 32px;\n      line-height: 32px;\n    }\n    \n    .mat-button.spacer,\n    .mat-icon-button.spacer,\n    .mat-raised-button.spacer {\n      background-color: transparent;\n    }\n  "]
            },] },
];
/** @nocollapse */
VirtualKeyboardKeyComponent.ctorParameters = function () { return []; };
VirtualKeyboardKeyComponent.propDecorators = {
    'key': [{ type: core_1.Input },],
    'disabled': [{ type: core_1.Input },],
    'keyPress': [{ type: core_1.Output },],
};
exports.VirtualKeyboardKeyComponent = VirtualKeyboardKeyComponent;
//# sourceMappingURL=virtual-keyboard-key.component.js.map