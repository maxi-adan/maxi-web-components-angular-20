import { Component } from '@angular/core';
import { MsPreload, MsButton } from 'maxi-angular-components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Preload',
  standalone: true,
  templateUrl: './preload.component.html',
  styleUrls: ['./preload.component.scss'],
  imports: [MsPreload, MsButton, CommonModule]
})
export class PreloadComponent {
  showPreload = false;
  showLoader = () => {
    this.showPreload = true;
    setTimeout(() => {
      this.showPreload = false;
    }, 3000);
  }

}