import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { KeyPressInterface } from './key-press.interface';

@Component({
  selector: 'virtual-keyboard-key',
  templateUrl: './virtual-keyboard-key.component.html',
  styleUrls: ['./virtual-keyboard-key.component.scss']
})

export class VirtualKeyboardKeyComponent implements OnInit {
  @Input() key: string;
  @Input() disabled: boolean;
  @Output() keyPress = new EventEmitter<KeyPressInterface>();

  public special = false;
  public spacer = false;
  public flexValue: string;
  public keyValue: string;
  public icon: string;
  public text: string;

  private supportedSpecialKeys: Array<string> = [
    'Enter',
    'Backspace',
    'Escape',
    'CapsLock',
    'SpaceBar',
    'Spacer',
    'Shift',
  ];
  private icons = {
    Enter: 'keyboard_return',
    Backspace: 'backspace',
    Escape: 'close',
    SpaceBar: 'space_bar',
    Shift: 'keyboard_capslock'
  };
  private texts = {
    CapsLock: 'Caps'
  };
  private notDisabled = [
    'Enter',
    'Backspace',
    'Escape',
  ];

  /**
   * Constructor of the class.
   */
  public constructor() { }

  /**
   * On init life cycle hook, within this we'll initialize following properties:
   *  - disabled
   *  - special
   *  - keyValue
   *  - flexValue
   */
  public ngOnInit(): void {
    let multiplier = 1;
    let fix = 0;

    if (this.key.length > 1) {
      this.spacer = /^Spacer(:(\d+))?$/g.test(this.key);
      this.special = !!this.supportedSpecialKeys.filter(specialKey => {
        const pattern = new RegExp(`^(${specialKey})(:([0-9]))?$`);

        return pattern.test(this.key);
      }).length;

      const matches = /^(\w+)(:(\d+))?$/g.exec(this.key);

      this.keyValue = matches[1];

      if (matches[3]) {
        multiplier = parseInt(matches[3], 10);
        fix = (multiplier - 1) * 4;
      }
    } else {
      this.keyValue = this.key;
    }

    if (this.special) {
      if (this.icons.hasOwnProperty(this.keyValue)) {
        this.icon = this.icons[this.keyValue];
      } else {
        this.text = this.texts[this.keyValue];
      }
    }

    this.flexValue = `${multiplier * 64 + fix}px`;
  }

  /**
   * Method to check if key is disabled or not.
   *
   * @returns {boolean}
   */
  public isDisabled(): boolean {
    if (this.spacer) {
      return true;
    } else if (this.disabled && this.notDisabled.indexOf(this.keyValue) !== -1) {
      return false;
    } else {
      return this.disabled;
    }
  }

  /**
   * Method to handle actual "key" press from virtual keyboard.
   *  1) Key is "Special", process special key event
   *  2) Key is "Normal", append this key value to input
   */
  public onKeyPress(): void {
    this.keyPress.emit({special: this.special, keyValue: this.keyValue, key: this.key});
  }
}
