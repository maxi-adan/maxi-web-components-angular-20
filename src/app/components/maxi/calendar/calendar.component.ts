import { Component } from '@angular/core';
import { MsCalendar } from 'maxi-angular-components';

@Component({
  selector: 'AppCalendar',
  standalone: true,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  imports: [MsCalendar]
})
export class CalendarComponent {

  valueCalendar:string | null = null;

  handleUpdateCalendar({ detail }: any) {
    console.log({ value: detail });
    this.valueCalendar = detail;
  }

}