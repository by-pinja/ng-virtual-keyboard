# ng-virtual-keyboard
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![npm version](https://badge.fury.io/js/%40protacon%2Fng-virtual-keyboard.svg)](https://badge.fury.io/js/%40protacon%2Fng-virtual-keyboard)
[![npm](https://img.shields.io/npm/dm/@protacon/ng-virtual-keyboard.svg)](https://www.npmjs.com/package/@protacon/ng-virtual-keyboard)
[![Dependency Status](https://david-dm.org/protacon/ng-virtual-keyboard.svg)](https://david-dm.org/protacon/ng-virtual-keyboard)
[![devDependency Status](https://david-dm.org/protacon/ng-virtual-keyboard/dev-status.svg)](https://david-dm.org/protacon/ng-virtual-keyboard#info=devDependencies)

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
    ...
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
  ng-virtual-keyboard-layout="alphanumeric"
  ng-virtual-keyboard-placeholder="Custom placeholder text"
/>
```

| Attribute | Description |
| --- | --- |
| `ng-virtual-keyboard`             | Required to initialize Virtual Keyboard to specified input |
| `ng-virtual-keyboard-layout`      | Used layout on keyboard, following keyboards are defaults that you can use `alphanumeric, alphanumericNordic, extended, extendedNordic, numeric, phone` |
| `ng-virtual-keyboard-placeholder` | Override placeholder text, if input has not any - or you want to override input placeholder value |

## Demo
https://by-pinja.github.io/ng-virtual-keyboard/

## Local development

To run virtual keyboard from local docker environment

```bash
docker-compose build ; docker-compose up
```

## License
[The MIT License (MIT)](LICENSE)

Copyright (c) 2017 Protacon
