import { Component } from '@angular/core';
import { MsDropdown } from 'maxi-angular-components';

@Component({
  selector: 'AppDropdown',
  standalone: true,
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  imports: [MsDropdown],
})
export class DropdownComponent {
  options = [
    {
      label: 'USA',
      value: '1',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png',
    },
    {
      label: 'México',
      value: '2',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png',
    },
    {
      label: 'Colombia',
      value: '3',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/200px-Flag_of_Colombia.svg.png',
    },
    {
      label: 'Canada',
      value: '4',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/800px-Flag_of_Canada_%28Pantone%29.svg.png',
    },
    {
      label: 'Venezuela',
      value: '5',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/255px-Flag_of_Venezuela.svg.png',
    },
  ];

  valueDropdown = null;

  handleSelection(event: any) {
    console.log(event.detail);
    this.valueDropdown = event.detail.value;
  }
}
