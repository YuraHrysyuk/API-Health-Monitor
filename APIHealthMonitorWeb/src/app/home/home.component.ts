import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { Data } from '@angular/router';

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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  componentTitle = 'APIHealthMonitorWeb';

  tableColumns: string[] = ['name', 'createdOn', 'comments'];
  headers: string[] = ['Name', 'Created On', 'Comments'];
  dataSource = DATA_ARRAY;
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.componentTitle);
  }
}
