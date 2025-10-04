import { Component, ViewEncapsulation } from '@angular/core';
import { MsTable } from 'maxi-angular-components';

const randomNames = [
  "John",
  "Jane",
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Ethan",
  "Fiona",
  "George",
  "Hannah",
  "Ian",
  "Julia",
  "Kevin",
  "Laura",
  "Michael",
  "Nina",
];
const randomLastNames = [
  "Smith",
  "Johnson",
  "Brown",
  "Taylor",
  "Anderson",
  "Thomas",
  "Jackson",
  "White",
  "Harris",
  "Martin",
  "Thompson",
  "Garcia",
  "Martinez",
  "Robinson",
  "Clark",
  "Lewis",
];
const randomStatus = ["Active", "Inactive"];
const randomAmount = [100, 200, 300, 500, 800];
const randomAmountToPay = [10, 15, 20, 30, 50, 80, 90, 95, 96];
function getRandomElement(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

@Component({
  selector: 'AppTable',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  imports: [MsTable],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent {

  data =   Array.from({ length: 16 }, (_, index) => ({
    id: index + 1,
    name: getRandomElement(randomNames),
    lastName: getRandomElement(randomLastNames),
    status: getRandomElement(randomStatus),
    age: Math.floor(Math.random() * 60) + 18,
    amount: getRandomElement(randomAmount),
  }))

  nestedInfo: any = null;
  
  columns = [
    { field: 'id', header: 'ID', width: '40px', sortable: true },
    { field: 'name', header: 'Name', width: '150px', sortable: true },
    {
      field: 'lastName',
      header: 'Last Name',
      width: '150px',
      sortable: true,
    },
    { field: 'age', header: 'Age', width: '150px', sortable: true },
    {
      field: 'status',
      header: 'Status',
      render: (row: { status: string }) => {
        const badge : any = document.createElement('ms-badge');
        badge.value = row.status;
        badge.severity = row.status === 'Active' ? 'success' : 'danger';

        return badge;
      },
      footer: 'Total',
      width: '150px',
      sortable: true,
    },
    {
      field: 'amount',
      header: 'Amount',
      align: 'right',
      width: '150px',
      footer: this.data
        .slice(0, 5)
        .reduce((acc: any, row: { amount: any }) => acc + row.amount, 0),
      sortable: true,
    },
    {
      header: 'Actions',
      render: (row: any) => {
        const btnEdit : any = document.createElement('ms-button');
        btnEdit.label = 'Edit';
        btnEdit.onclick = (e: any) => this.handleClick(e, row, 'Edit');
        btnEdit.variant = 'primary';
        btnEdit.classList.add('sb-button', 'ms-table-actions');

        const btnDelete : any = document.createElement('ms-button');
        btnDelete.label = 'Delete';
        btnDelete.onclick = (e: any) => this.handleClick(e, row, 'Delete');
        btnDelete.variant = 'danger';
        btnDelete.classList.add('sb-button', 'ms-table-actions');

        const div = document.createElement('div');
        div.classList.add('btns');
        div.appendChild(btnEdit);
        div.appendChild(btnDelete);

        return [div];
      },
      width: '150px',
      align: 'center',
    },
  ];

  handleClick(e: { stopPropagation: () => void }, id: string, action: string) {
    e.stopPropagation();
    console.log({ id, action });
  }


  handleRowClick(row: any) {
    console.log(row.detail);
  } 

  handlePageChange(row: any) {
    console.log(row.detail);
  }

  handleSort(row: any) {
    console.log(row.detail);
  }

  handleSelection(row: any) {
    console.log(row.detail);
  }

  handleExpand(row: any) {
    console.log({ id: row.detail });

    const columns = [
      { header: 'Date', field: 'date' },
      { header: 'Description', field: 'description' },
      { header: 'Payment Method', field: 'paymentMethod' },
      { header: 'Currency', field: 'currency', align: 'center' },
      { header: 'Amount to pay', field: 'amountToPay', align: 'right' },
      {
        header: "Status",
        field: "status",
        align: "center",
        render: (row: any) => {
          const badge : any = document.createElement("ms-badge");
          badge.value = row.status;
          badge.severity = row.status === "pending" ? "warning" : "success";

          return [badge];
        },
      },
    ];
    const data = [
      {
        date: '12/22/2024',
        amountToPay: getRandomElement(randomAmountToPay),
        description: 'Monthly subscription',
        currency: 'USD',
        status: 'pending',
        paymentMethod: 'creditCard',
        transactionId: 'TXN12345',
      },
      {
        date: '12/28/2024',
        amountToPay: getRandomElement(randomAmountToPay),
        description: 'Utility bill',
        currency: 'USD',
        status: 'completed',
        paymentMethod: 'bankTransfer',
        transactionId: 'TXN12346',
      },
    ];

    interface TableContent {
      columns: any[];
      data: any[];
      size: string;
      classList: DOMTokenList;
    }

    const createContent = document.createElement('ms-table') as unknown as TableContent;
    createContent.columns = columns;
    createContent.data = [...data].sort(() => Math.random() - 0.5);
    createContent.size = 'small';
    createContent.classList.add('nested-table');

    this.nestedInfo = createContent;
  }

}