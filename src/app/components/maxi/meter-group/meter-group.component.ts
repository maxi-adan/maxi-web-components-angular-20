import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsMeterGroup } from 'maxi-angular-components';

@Component({
  selector: 'MeterGroup',
  standalone: true,
  templateUrl: './meter-group.component.html',
  styleUrls: ['./meter-group.component.scss'],
  imports: [MsMeterGroup, CommonModule]
})
export class MeterGroupComponent {
  values = [
    { label: "Apps", value: 35, color: "#10B981" },
    { label: "Documents", value: 20, color: "#3B82F6" },
    { label: "Free Space", value: 45, color: "#E5E7EB" }
  ];
}
