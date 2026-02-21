import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsPopover, MsButton } from 'maxi-angular-components';

@Component({
  selector: 'AppPopover',
  standalone: true,
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  imports: [MsPopover, MsButton, CommonModule]
})
export class PopoverComponent {}
