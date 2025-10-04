import { Component } from '@angular/core';
import { MsRadio } from 'maxi-angular-components';

@Component({
  selector: 'AppRadio',
  standalone: true,
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  imports: [MsRadio]
})
export class RadioComponent {

  selectedValue="";
  handleRadioChange(event: any) {
    this.selectedValue=event.detail;
  }

}