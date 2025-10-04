import { Component } from '@angular/core';
import { MsInputSwitch } from 'maxi-angular-components';

@Component({
  selector: 'InputSwitch',
  standalone: true,
  templateUrl: './input-switch.component.html',
  styleUrls: ['./input-switch.component.scss'],
  imports: [MsInputSwitch]
})
export class InputSwitchComponent {
  inputSwitch = false;
  handleSwitchChange(event: any) {
    this.inputSwitch = event.detail;
  } 
}