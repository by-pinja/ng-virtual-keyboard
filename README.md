# ng-virtual-keyboard
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Build Status](https://travis-ci.org/ProtaconSolutions/ng-virtual-keyboard.png?branch=master)](https://travis-ci.org/ProtaconSolutions/ng-virtual-keyboard)
[![codecov](https://codecov.io/gh/ProtaconSolutions/ng-virtual-keyboard/branch/master/graph/badge.svg)](https://codecov.io/gh/ProtaconSolutions/ng-virtual-keyboard)
[![Dependency Status](https://david-dm.org/ProtaconSolutions/ng-virtual-keyboard.svg)](https://david-dm.org/ProtaconSolutions/ng-virtual-keyboard)
[![devDependency Status](https://david-dm.org/ProtaconSolutions/ng-virtual-keyboard/dev-status.svg)](https://david-dm.org/ProtaconSolutions/ng-virtual-keyboard#info=devDependencies)

## What is this?
Virtual Keyboard for Angular applications

## Install
### Step 1: Install @protacon/ng-virtual-keyboard
```bash
$ npm install --save @protacon/ng-virtual-keyboard
```

### Step 2: Import the module
Add `NgVirtualKeyboardModule` as an import in your app's root NgModule.
```typescript
import { NgVirtualKeyboardModule }  from '@protacon/ng-virtual-keyboard';

@NgModule({
  ...
  imports: [
    ...,
    NgVirtualKeyboardModule,
  ],
  ...
})
export class AppModule { }
```

## Usage
Simple usage example
```html
<input type="text" value=""
  ng-virtual-keyboard
  ng-virtual-keyboard-layout="layout"
  ng-virtual-keyboard-placeholder="Placeholder"
/>
```

| Attribute | Description |
| --- | --- |
| ng-virtual-keyboard             | Required to initialize Virtual Keyboard to specified input |
| ng-virtual-keyboard-layout      | Used layout on keyboard, following keyboards are defaults that you can use `alphaNumeric, alphaNumericNordic, extended, extendedNordic, numeric, phone` |
| ng-virtual-keyboard-placeholder | Override placeholder text, if input has not any - or you want to override input placeholder value |

## Demo

https://protacon.github.io/ng-virtual-keyboard/

## License
[The MIT License (MIT)](LICENSE)

Copyright (c) 2017 Protacon
