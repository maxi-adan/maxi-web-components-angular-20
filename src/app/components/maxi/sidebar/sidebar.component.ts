import { Component } from '@angular/core';
import { MsSidebar, MsButton } from 'maxi-angular-components';

@Component({
  selector: 'Sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [MsSidebar, MsButton]
})
export class SidebarComponent {
  sidebarContent = false;

  openSidebarContent() {
    this.sidebarContent = true;
  }
  closeSidebarContent(e: any) {
    this.sidebarContent = false;
  }
}