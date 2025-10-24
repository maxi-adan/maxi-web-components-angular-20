import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsAccordion } from 'maxi-angular-components';

@Component({
  selector: 'Accordion',
  standalone: true,
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  imports: [MsAccordion, CommonModule]
})
export class AccordionComponent {
  activeIndex = -1;
  multiple = true;

  // Array de datos para el acordeón
  accordionData : any = [
    {
      header: "Tab One",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      header: {
        type: 'custom',
        avatar: 'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
        text: 'Amy Elsner',
        badge: '3'
      },
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      header: "Tab Three",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  // Helper para verificar si el header es un string
  isStringHeader(header: any): boolean {
    return typeof header === 'string';
  }

  handleTabChange = (event: any) => {
    const { index, isOpen, activeIndexes } = event.detail;
    console.log(`Tab ${index} ${isOpen ? "opened" : "closed"}`);
    console.log("Tabs active:", activeIndexes);
  };

handleTabOpen = (event: any) => {
    const { index, activeIndexes } = event.detail;
    console.log(`Tab ${index} opened!`);
    console.log("Tabs active:", activeIndexes);
  };

   handleTabClose = (event: any) => {
    const { index, activeIndexes } = event.detail;
    console.log(`Tab ${index} closed!`);
    console.log("Tabs active:", activeIndexes);
  };

  
}