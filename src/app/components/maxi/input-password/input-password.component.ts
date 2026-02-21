import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsInputPassword } from 'maxi-angular-components';

@Component({
  selector: 'InputPassword',
  standalone: true,
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss'],
  imports: [MsInputPassword, CommonModule]
})
export class InputPasswordComponent {
  handlePasswordChange = (e: any) => {
    console.log("Password Change:", e.detail.value);
  };
}
