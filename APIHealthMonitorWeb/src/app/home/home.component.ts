import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { Data } from '@angular/router';

export interface DataElement {
  name: string;
  comments: string;
}

const DATA_ARRAY: DataElement[] = [
  {name: 'Jhon', comments: 'Some comment 1'},
  {name: 'Bob', comments: 'Some comment 2'},
  {name: 'Kate', comments: 'Some comment 3'},
  {name: 'Alice', comments: 'Some comment 4'},
  {name: 'Piter', comments: 'Some comment 5'}
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

  getDate() {
    const options = {hour: '2-digit', minute: '2-digit', year: 'numeric', month: 'short', day: 'numeric'};
    const s = new Date(2020, 1, 1).getTime();
    const f = new Date().getTime();
    const date = new Date(s + Math.random() * (f - s));
    return `${date.toLocaleDateString('ru-RU', options)}`;
  }

}
