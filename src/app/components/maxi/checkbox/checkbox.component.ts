import { Component } from '@angular/core';
import { MsCheckbox } from 'maxi-angular-components';

@Component({
  selector: 'AppCheckbox',
  standalone: true,
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  imports: [MsCheckbox]
})
export class CheckboxComponent {
  checkboxState=false;
  onCheckboxChange(event:any) {
    this.checkboxState=event.detail;
  }
}