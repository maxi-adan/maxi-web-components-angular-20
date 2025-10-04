import { Component } from '@angular/core';
import { MsInputField } from 'maxi-angular-components';

@Component({
  selector: 'InputField',
  standalone: true,
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  imports: [MsInputField]
})
export class InputFieldComponent {

  handleChangeEvent(event: any): void {
    console.log('Input Changed:', event.detail);
  }

}