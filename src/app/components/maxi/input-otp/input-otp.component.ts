import { Component } from '@angular/core';
import { MsInputOtp } from 'maxi-angular-components';

@Component({
  selector: 'InputOtp',
  standalone: true,
  templateUrl: './input-otp.component.html',
  styleUrls: ['./input-otp.component.scss'],
  imports: [MsInputOtp]
})
export class InputOtpComponent {
  value: string = '';
  length: number = 4;

  handleInputEvent(event: any) {
    this.value = event.detail;
    console.log('Input event:', this.value);
  }

  handleCompleteEvent(event: any) {
    this.value = event.detail;
    console.log('Complete event:', this.value);
  }

}