import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsKnob } from 'maxi-angular-components';

@Component({
  selector: 'Knob',
  standalone: true,
  templateUrl: './knob.component.html',
  styleUrls: ['./knob.component.scss'],
  imports: [MsKnob, CommonModule]
})
export class KnobComponent {
  value = 40;
  
  handleChangeValue = (e: any) => {
    console.log("Knob Value:", e.detail);
    this.value = e.detail;
  };
}
