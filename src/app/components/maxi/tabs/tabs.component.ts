import { Component } from '@angular/core';
import { MsTabs } from 'maxi-angular-components';

@Component({
  selector: 'AppTabs',
  standalone: true,
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  imports: [MsTabs]
})
export class TabsComponent {
  activeTab = 0;
}