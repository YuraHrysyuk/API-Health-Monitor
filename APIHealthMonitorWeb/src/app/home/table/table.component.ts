import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface DataElement {
  name: string;
  createdOn: string;
  comments: string;
}

const DATA_ARRAY: DataElement[] = [
  {name: 'Jhon', createdOn: '07/23/2020', comments: 'Some comment 1'},
  {name: 'Bob', createdOn: '07/23/2020', comments: 'Some comment 2'},
  {name: 'Kate', createdOn: '07/23/2020', comments: 'Some comment 3'},
  {name: 'Alice', createdOn: '07/23/2020', comments: 'Some comment 4'},
  {name: 'Piter', createdOn: '07/23/2020', comments: 'Some comment 5'}
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  tableColumns: string[] = ['name', 'createdOn', 'comments', 'arrow'];
  headers: string[] = ['Name', 'Created On', 'Comments'];
  dataSource = DATA_ARRAY;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(){
    this.router.navigate(['end-points']);
  }

}
