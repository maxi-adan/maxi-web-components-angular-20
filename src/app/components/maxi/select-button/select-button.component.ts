import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsSelectButton } from 'maxi-angular-components';

@Component({
  selector: 'SelectButton',
  standalone: true,
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss'],
  imports: [MsSelectButton, CommonModule]
})
export class SelectButtonComponent {
  options = ["Option 1", "Option 2", "Option 3"];
  
  handleChangeValue = (e: any) => {
    console.log("Selected:", e.detail);
  };
}
