import { Component } from '@angular/core';
import { MsTimeline, MsBadge } from 'maxi-angular-components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Timeline',
  standalone: true,
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  imports: [MsTimeline, MsBadge, CommonModule]
})
export class TimelineComponent {

  events = [
    {
      date: "04/08/2024 - 09:37 PM",
      status: "Delivered",
      severity: "success"
    },
    {
      date: "03/08/2024 - 10:54 AM", 
      status: "In transit",
      severity: "info"
    },
    {
      date: "02/08/2024 - 06:21 AM",
      status: "Pending",
      severity: "warning"
    },
    {
      date: "01/08/2024 - 11:31 AM",
      status: "Undelivered",
      severity: "danger"
    }
  ];

}