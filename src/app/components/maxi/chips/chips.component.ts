import { Component } from '@angular/core';
import { MsChips } from 'maxi-angular-components';

@Component({
  selector: 'Chips',
  standalone: true,
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  imports: [MsChips]
})
export class ChipsComponent {

  chipsValue = ['Chip 1', 'Chip 2', 'Chip 3'];

  handleChipsChange(event: any) {
    this.chipsValue = event.detail
  }

}