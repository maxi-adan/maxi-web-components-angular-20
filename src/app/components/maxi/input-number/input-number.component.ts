import { Component } from '@angular/core';
import { MsInputNumber } from 'maxi-angular-components';

@Component({
  selector: 'InputNumber',
  standalone: true,
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  imports: [MsInputNumber]
})
export class InputNumberComponent {

  inputValue = 151351

  onInputNumberChange(event: any) {
    console.log('Input number change:', event.detail);
  }

}