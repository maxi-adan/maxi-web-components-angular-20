import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsIcon } from 'maxi-angular-components';

@Component({
  selector: 'Icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  imports: [MsIcon, CommonModule]
})
export class IconComponent {
  readonly iconNames = [
    'home', 'search', 'settings', 'user', 'arrow-left', 'arrow-right',
    'alert-circle', 'alert-triangle', 'bell', 'calendar', 'check',
    'check-circle', 'chevron-down', 'chevron-left', 'chevron-right',
    'chevron-up', 'copy', 'download', 'edit', 'eye', 'eye-off', 'filter',
    'info', 'lock', 'mail', 'menu', 'minus', 'plus', 'refresh', 'trash',
    'unlock', 'upload', 'x',
  ];
}
