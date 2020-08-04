import { ScenariosService } from './../scenarios.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SCENARIO_DATA, ScenarioData } from '../scenario';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {
  @Output() editClick = new EventEmitter<boolean>();

  scenarios = SCENARIO_DATA;
  selectedScenario: ScenarioData;
  panelOpenState = false;

  constructor(private scenariosService: ScenariosService) { }

  ngOnInit(): void {
  }

  runTest(index: number) {
    const el = document.querySelectorAll('.panelProgressBar')[index];
    if (el.classList.contains('hidden')) {
      el.classList.remove('hidden');
    }
    setTimeout(() => el.classList.add('hidden'), 4000);
  }

  getScenario(scenario: ScenarioData) {
    this.selectedScenario = scenario;
    this.scenariosService.findScenario(scenario.id);
    this.editClick.emit();
  }
}
