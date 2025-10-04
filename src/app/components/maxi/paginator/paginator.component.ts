import { Component } from '@angular/core';
import { MsPaginator } from 'maxi-angular-components';

@Component({
  selector: 'Paginator',
  standalone: true,
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  imports: [MsPaginator]
})
export class PaginatorComponent {

  rowsValue = 20;
  page = 0;
  options = [
    { label: '10', value: 10 },
    { label: '20', value: 20 },
    { label: '30', value: 30 }
  ];
  handlePageChange = (event: any) => {
    const { currentPage, rows } = event.detail;
    this.rowsValue = rows
    this.page = currentPage
  }


}