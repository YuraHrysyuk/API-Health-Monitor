import { ScenarioData } from 'src/app/endpoint/scenario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointDataService {
  SCENARIO_DATA: ScenarioData[] = [
    { id: 1, name: 'Jhon', description: 'Some description for Jhon', date: '11/11/2011' },
    { id: 2, name: 'Bob', description: 'Some description for Bob', date: '12/11/2011' },
    { id: 3, name: 'Kate', description: 'Some description for Kate', date: '13/11/2011' },
    { id: 4, name: 'Alice', description: 'Some description for Alice', date: '14/11/2011' },
    { id: 5, name: 'Piter', description: 'Some description for Piter', date: '15/11/2011' },
  ];
  // private SCENARIO_DATA: ScenarioData[] = [
  //   { id: 1, name: 'Jhon', description: 'Some description for Jhon', date: '11/11/2011' },
  //   { id: 2, name: 'Bob', description: 'Some description for Bob', date: '12/11/2011' },
  //   { id: 3, name: 'Kate', description: 'Some description for Kate', date: '13/11/2011' },
  //   { id: 4, name: 'Alice', description: 'Some description for Alice', date: '14/11/2011' },
  //   { id: 5, name: 'Piter', description: 'Some description for Piter', date: '15/11/2011' },
  // ];

  public selectedScenario: ScenarioData;

  constructor() { }
  getData(): ScenarioData[] {
    return this.SCENARIO_DATA;
  }

  findScenario(id: number) {
    this.selectedScenario = this.SCENARIO_DATA.find(x => x.id === id);
  }

  getSelected() {
    return this.selectedScenario;
  }
  deleteScenario(id: number) {
    this.SCENARIO_DATA = this.SCENARIO_DATA.filter(el => el.id !== id);
  }
}
