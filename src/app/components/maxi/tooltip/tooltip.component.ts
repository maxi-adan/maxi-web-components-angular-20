import { Component } from '@angular/core';
import { MsBadge, MsTooltip } from 'maxi-angular-components';

@Component({
  selector: 'Tooltip',
  standalone: true,
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  imports: [MsBadge, MsTooltip]
})
export class TooltipComponent {

}