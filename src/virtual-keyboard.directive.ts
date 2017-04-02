import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { VirtualKeyboardComponent } from './virtual-keyboard.component';
import {
  alphaNumericKeyboard,
  alphaNumericNordicKeyboard,
  extendedKeyboard,
  extendedNordicKeyboard,
  KeyboardLayout,
  numericKeyboard,
  phoneKeyboard
} from './layouts';

@Directive({
  selector: '[ng-virtual-keyboard]'
})

export class NgVirtualKeyboardDirective {
  private opened = false;

  @Input('ng-virtual-keyboard-layout') layout: Array<Array<string>>|string;
  @Input('ng-virtual-keyboard-placeholder') placeholder: string;

  @HostListener('focus', ['$event'])
  onFocus() {
    if (!this.opened) {
      this.element.nativeElement.dispatchEvent(new Event('click', {bubbles : true}));
    }
  }

  @HostListener('click', ['$event'])
  onClick() {
    let dialogRef: MdDialogRef<VirtualKeyboardComponent>;

    dialogRef = this.dialog.open(VirtualKeyboardComponent);
    dialogRef.componentInstance.inputElement = this.element;
    dialogRef.componentInstance.layout = this.getLayout();
    dialogRef.componentInstance.placeholder = this.getPlaceHolder();

    dialogRef
      .afterClosed()
      .subscribe(() => {
        setTimeout(() => {
          this.opened = false;
        }, 0);
      });

    this.opened = true;
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
