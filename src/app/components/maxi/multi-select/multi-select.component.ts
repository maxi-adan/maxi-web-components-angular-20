import { Component } from '@angular/core';
import { MsMultiselect } from 'maxi-angular-components';

@Component({
  selector: 'MultiSelect',
  standalone: true,
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  imports: [MsMultiselect]
})
export class MultiSelectComponent {
  selectedItems = [
    { label: 'New York', value: '1' },
    { label: 'CDMX', value: '3' }
  ];
  options = [
    { label: 'New York', value: '1' },
    { label: 'San Francisco', value: '2' },
    { label: 'CDMX', value: '3' },
    { label: 'Guanajuato', value: '4' },
  ];

  handleSelect(event: any) {
    this.selectedItems = event.detail;
  }
}