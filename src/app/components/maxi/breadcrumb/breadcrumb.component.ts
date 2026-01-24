import { Component } from '@angular/core';
import { MsBreadcrumb } from 'maxi-angular-components';

@Component({
  selector: 'Breadcrumb',
  standalone: true,
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  imports: [MsBreadcrumb]
})
export class BreadcrumbComponent {
  items = [
    { label: "Dashboard" },
    { label: "Portfolio" },
    { label: "Investment Accounts" },
    { label: "Transaction History" }
  ];

   homeWithTemplate = { 
    template: "<span style='color: #043F8F; font-weight: bold;'>🏠 Home</span>"
  };
}