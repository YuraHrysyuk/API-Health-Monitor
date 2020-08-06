import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ScenarioData, SCENARIO_DATA } from 'src/app/endpoint/scenario';

// export interface DataElement {
//   name: string;
//   createdOn: string;
//   comments: string;
// }

// const DATA_ARRAY: DataElement[] = [
//   {name: 'Jhon', createdOn: '07/23/2020', comments: 'Some comment 1'},
//   {name: 'Bob', createdOn: '07/23/2020', comments: 'Some comment 2'},
//   {name: 'Kate', createdOn: '07/23/2020', comments: 'Some comment 3'},
//   {name: 'Alice', createdOn: '07/23/2020', comments: 'Some comment 4'},
//   {name: 'Piter', createdOn: '07/23/2020', comments: 'Some comment 5'}
// ];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Output() editClick = new EventEmitter<boolean>();

  selectedScenario: ScenarioData;
  tableColumns: string[] = ['name', 'date', 'description', 'controlBar', 'arrow'];
  headers: string[] = ['Name', 'Created On', 'Comments'];
  dataSource = SCENARIO_DATA;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getScenario(index: number) {
    this.selectedScenario = SCENARIO_DATA.find(el => el.id === index);
    console.log(this.selectedScenario);
    this.editClick.emit();
  }

  redirect(){
    this.router.navigate(['end-points']);
  }

}
