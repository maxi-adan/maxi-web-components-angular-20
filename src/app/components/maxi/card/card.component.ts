import { Component } from '@angular/core';
import { MsCard, MsButton } from 'maxi-angular-components';

@Component({
  selector: 'AppCard',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [MsCard, MsButton]
})
export class CardComponent {

}