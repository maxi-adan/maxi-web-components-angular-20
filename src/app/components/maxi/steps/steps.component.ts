import { Component } from '@angular/core';
import { MsSteps } from 'maxi-angular-components';

@Component({
  selector: 'Steps',
  standalone: true,
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
  imports: [MsSteps]
})
export class StepsComponent {
  steps = [
    { label: 'Account Verification' },
    { label: 'Document Upload' },
    { label: 'Payment Setup' },
  ];
}