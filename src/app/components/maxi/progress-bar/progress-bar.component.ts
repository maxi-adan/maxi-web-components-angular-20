import { Component } from '@angular/core';
import { MsProgressBar } from 'maxi-angular-components';

@Component({
  selector: 'ProgressBar',
  standalone: true,
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  imports: [MsProgressBar]
})
export class ProgressBarComponent {

}