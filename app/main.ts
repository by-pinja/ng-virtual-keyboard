// polyfills, comment the following out for debugging purpose
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

// The browser platform with a compiler
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';
import '@angular/material/prebuilt-themes/deeppurple-amber.css';

//noinspection TypeScriptCheckImport
import { NgVirtualKeyboardModule }  from '@protacon/ng-virtual-keyboard';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    FlexLayoutModule,
    NgVirtualKeyboardModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
})

export class AppModule { }

// Compile and launch the module
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => { })
  .catch((error) => console.error(error));
