import { ScenarioData, SCENARIO_DATA } from './scenario';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ScenariosService {
    public selectedScenario: ScenarioData;
    private scenariosArray: ScenarioData[] = SCENARIO_DATA;
    updateSelected = new EventEmitter<any>();

    constructor() {
    }

    findScenario(id: number) {
        this.selectedScenario = this.scenariosArray.find(x => x.id === id);
        this.updateSelected.emit();
    }

    getSelected() {
        return this.selectedScenario;
    }
}
