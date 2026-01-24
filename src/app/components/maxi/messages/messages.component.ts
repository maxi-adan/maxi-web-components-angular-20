import { Component } from '@angular/core';
import { MsMessage } from 'maxi-angular-components';

@Component({
  selector: 'Messages',
  standalone: true,
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  imports: [MsMessage]
})
export class MessagesComponent {

}