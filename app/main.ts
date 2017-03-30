// polyfills, comment the following out for debugging purpose
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

//noinspection TypeScriptCheckImport
import { NgVirtualKeyboardModule }  from 'ProtaconSolutions/ng-virtual-keyboard';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    NgVirtualKeyboardModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }

// Compile and launch the module
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => { })
  .catch((error) => console.error(error));