import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { VirtualKeyboardComponent } from './virtual-keyboard.component';
import {
  alphanumericKeyboard,
  alphanumericNordicKeyboard,
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
  private focus = true;

  @Input('ng-virtual-keyboard-layout') layout: KeyboardLayout|string;
  @Input('ng-virtual-keyboard-placeholder') placeholder: string;
  @Input('ng-virtual-keyboard-type') type: string;

  @HostListener('window:blur')
  onWindowBlur() {
    this.focus = false;
  }

  @HostListener('window:focus')
  onWindowFocus() {
    setTimeout(() => {
      this.focus = true;
    }, 0);
  }

  @HostListener('focus')
  onFocus() {
    this.openKeyboard();
  }

  @HostListener('click')
  onClick() {
    this.openKeyboard();
  }

  /**
   * Constructor of the class.
   *
   * @param {ElementRef}  element
   * @param {MatDialog}    dialog
   */
  public constructor(
    private element: ElementRef,
    private dialog: MatDialog,
  ) { }

  /**
   * Method to open virtual keyboard
   */
  private openKeyboard() {
    if (!this.opened && this.focus) {
      this.opened = true;

      let dialogRef: MatDialogRef<VirtualKeyboardComponent>;

      dialogRef = this.dialog.open(VirtualKeyboardComponent);
      dialogRef.componentInstance.inputElement = this.element;
      dialogRef.componentInstance.layout = this.getLayout();
      dialogRef.componentInstance.placeholder = this.getPlaceHolder();
      dialogRef.componentInstance.type = this.getType();

      dialogRef
        .afterClosed()
        .subscribe(() => {
          setTimeout(() => {
            this.opened = false;
          }, 0);
        });
    }
  }

  /**
   * Getter for used keyboard layout.
   *
   * @returns {KeyboardLayout}
   */
  private getLayout(): KeyboardLayout {
    let layout;

    switch (this.layout) {
      case 'alphanumeric':
        layout = alphanumericKeyboard;
        break;
      case 'alphanumericNordic':
        layout = alphanumericNordicKeyboard;
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

  /**
   * Getter for used type for virtual keyboard input field.
   * 
   * @return {string}
   */
  private getType(): string {
    return this.type ? this.type : this.element.nativeElement.type;
  }
}
