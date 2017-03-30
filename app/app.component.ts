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
      name: 'Alpha-Numeric',
      layout: 'alphaNumeric',
      placeholder: 'placeholder 1',
      placeholderCustom: 'custom placeholder 1',
    },
    {
      name: 'Alpha-Numeric - Nordic',
      layout: 'alphaNumericNordic',
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
  ]
}
