import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsImage } from 'maxi-angular-components';

@Component({
  selector: 'AppImage',
  standalone: true,
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  imports: [MsImage, CommonModule]
})
export class ImageComponent {
  src = "https://www.primefaces.org/cdn/primevue/images/galleria/galleria10.jpg";
  alt = "Image Description";
}
