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

  constructor() { }

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
    this.editClick.emit();
  }
}
