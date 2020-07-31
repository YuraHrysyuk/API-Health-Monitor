import { Component, OnInit } from '@angular/core';

export interface ScenarioData {
  name: string;
  description: string;
  date: string;
}

const SCENARIO_DATA: ScenarioData[] = [
  {name: 'Jhon', description: 'Some description for Jhon', date: '11/11/2011'},
  {name: 'Bob', description: 'Some description for Bob', date: '12/11/2011'},
  {name: 'Kate', description: 'Some description for Kate', date: '13/11/2011'},
  {name: 'Alice', description: 'Some description for Alice', date: '14/11/2011'},
  {name: 'Piter', description: 'Some description for Piter', date: '15/11/2011'},
];

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {
  panelOpenState = false;
  scenarios = SCENARIO_DATA;

  constructor() { }

  ngOnInit(): void {
  }
}
