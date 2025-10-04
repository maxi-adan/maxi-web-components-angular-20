import { Component } from '@angular/core';
import { MsSkeleton } from 'maxi-angular-components';

@Component({
  selector: 'Skeleton',
  standalone: true,
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
  imports: [MsSkeleton]
})
export class SkeletonComponent {

}