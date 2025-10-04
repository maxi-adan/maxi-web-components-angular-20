import { Component } from '@angular/core';
import { MsAutocomplete } from 'maxi-angular-components';

const basicSuggestions = [
  {
    label: "USA",
    value: "1",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png",
  },
  {
    label: "Mexico",
    value: "2",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png",
  },
  {
    label: "Colombia",
    value: "3",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/200px-Flag_of_Colombia.svg.png",
  },
  {
    label: "Canada",
    value: "4",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/800px-Flag_of_Canada_%28Pantone%29.svg.png",
  },
  {
    label: "Venezuela",
    value: "5",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/255px-Flag_of_Venezuela.svg.png",
  },
];

@Component({
  selector: 'Autocomplete',
  standalone: true,
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  imports: [MsAutocomplete]
})
export class AutocompleteComponent {

  autocompleteValue = "";

  fakeAsyncFunction = (structure: unknown) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(structure);
      }, 0);
    });
  };

  async handleCompleteMethod(e: any) {
    const suggestions = await this.fakeAsyncFunction(basicSuggestions);

    e.detail.resolve(suggestions);
  }

  handleSelected(e: any) {
    this.autocompleteValue = e.detail;
  }

}