import { Component } from '@angular/core';
import { MsDialog, MsButton } from 'maxi-angular-components';

@Component({
  selector: 'AppDialog',
  standalone: true,
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  imports: [MsDialog, MsButton]
})
export class DialogComponent {

  visibleModal = false;

  handleHideModal() {
    this.visibleModal = false;
  }

  toogleDialog() {
    this.visibleModal = !this.visibleModal;

    console.log('toogleDialog', this.visibleModal);
  }
}