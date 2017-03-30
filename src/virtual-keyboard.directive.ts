import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { VirtualKeyboardComponent } from './virtual-keyboard.component';
import {
  alphaNumericKeyboard, KeyboardLayout, extendedKeyboard, numericKeyboard,
  alphaNumericNordicKeyboard, extendedNordicKeyboard, phoneKeyboard
} from './layouts';

@Directive({
  selector: '[ng-virtual-keyboard]'
})

export class NgVirtualKeyboardDirective {
  @Input('ng-virtual-keyboard-layout') layout: Array<Array<string>>|string;
  @Input('ng-virtual-keyboard-placeholder') placeholder: string;

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    let dialogRef: MdDialogRef<VirtualKeyboardComponent>;

    dialogRef = this.dialog.open(VirtualKeyboardComponent);
    dialogRef.componentInstance.inputElement = this.element;
    dialogRef.componentInstance.layout = this.getLayout();
    dialogRef.componentInstance.placeholder = this.getPlaceHolder();
  }

  /**
   * Constructor of the class.
   *
   * @param {ElementRef}  element
   * @param {MdDialog}    dialog
   */
  public constructor(
    private element: ElementRef,
    private dialog: MdDialog,
  ) { }

  /**
   * Getter for used keyboard layout.
   *
   * @returns {KeyboardLayout}
   */
  private getLayout(): KeyboardLayout {
    let layout;

    switch (this.layout) {
      case 'alphaNumeric':
        layout = alphaNumericKeyboard;
        break;
      case 'alphaNumericNordic':
        layout = alphaNumericNordicKeyboard;
        break;
      case 'extended':
        layout = extendedKeyboard;
        break;
      case 'extendedNordic':
        layout = extendedNordicKeyboard;
        break;
      case 'numeric':
        layout = numericKeyboard;
        break;
      case 'phone':
        layout = phoneKeyboard;
        break;
      default:
        layout = this.layout;
        break;
    }

    return layout;
  }

  /**
   * Getter for used placeholder for virtual keyboard input field.
   *
   * @returns {string}
   */
  private getPlaceHolder(): string {
    return this.placeholder ? this.placeholder : this.element.nativeElement.placeholder;
  }
}
