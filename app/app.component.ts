import { Component, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  public layouts = [
    {
      name: 'Alphanumeric',
      layout: 'alphanumeric',
      placeholder: 'placeholder 1',
      placeholderCustom: 'custom placeholder 1',
    },
    {
      name: 'Alphanumeric - Nordic',
      layout: 'alphanumericNordic',
      placeholder: 'placeholder 2',
      placeholderCustom: 'custom placeholder 2',
    },
    {
      name: 'Extended',
      layout: 'extended',
      placeholder: 'placeholder 3',
      placeholderCustom: 'custom placeholder 3',
    },
    {
      name: 'Extended - Nordic',
      layout: 'extendedNordic',
      placeholder: 'placeholder 4',
      placeholderCustom: 'custom placeholder 4',
    },
    {
      name: 'Numeric',
      layout: 'numeric',
      placeholder: 'placeholder 5',
      placeholderCustom: 'custom placeholder 5',
    },
    {
      name: 'Phone',
      layout: 'phone',
      placeholder: 'placeholder 6',
      placeholderCustom: 'custom placeholder 6',
    },
  ];

  public badges = [
    {
      img: 'https://img.shields.io/badge/license-MIT-blue.svg',
      link: 'https://github.com/protacon/ng-virtual-keyboard/blob/master/LICENSE',
    },
    {
      img: 'https://badge.fury.io/js/%40protacon%2Fng-virtual-keyboard.svg',
      link: 'https://badge.fury.io/js/%40protacon%2Fng-virtual-keyboard',
    },
    {
      img: 'https://travis-ci.org/protacon/ng-virtual-keyboard.png?branch=master',
      link: 'https://travis-ci.org/protacon/ng-virtual-keyboard',
    },
    {
      img: 'https://codecov.io/gh/protacon/ng-virtual-keyboard/branch/master/graph/badge.svg',
      link: 'https://codecov.io/gh/protacon/ng-virtual-keyboard',
    },
    {
      img: 'https://david-dm.org/protacon/ng-virtual-keyboard.svg',
      link: 'https://david-dm.org/protacon/ng-virtual-keyboard',
    },
    {
      img: 'https://david-dm.org/protacon/ng-virtual-keyboard/dev-status.svg',
      link: 'https://david-dm.org/protacon/ng-virtual-keyboard#info=devDependencies',
    },
  ];

  public customLayout = [
    ['a', 'b:2', 'Backspace:3'],
    ['c:1.33', 'd:1.67', 'Shift:3'],
  ];

  public invalid = false;

  get customLayoutValue() {
    return JSON.stringify(this.customLayout, null, 2);
  }

  set customLayoutValue(value) {
    try {
      this.customLayout = JSON.parse(value);

      this.invalid = false;
    } catch (error) {
      this.invalid = true;
    }
  }
}
