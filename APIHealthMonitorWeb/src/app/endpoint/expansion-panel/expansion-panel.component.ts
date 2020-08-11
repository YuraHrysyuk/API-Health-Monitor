import { EndpointDataService } from './../endpoint-data.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ScenarioData } from '../scenario';
import { MatDialog } from '@angular/material/dialog';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {
  @Output() editClick = new EventEmitter<boolean>();
  @Output() deleteClick = new EventEmitter<string>();

  scenarios: ScenarioData[];
  scenarioId: number;
  selectedScenario: ScenarioData;
  panelOpenState = false;
  private subscription: Subscription;
  constructor(public dialog: MatDialog, private data: EndpointDataService, private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(params => this.scenarioId = params.id);
   }

  ngOnInit(): void {
    this.data.getEndPoint(this.scenarioId).subscribe(result => this.scenarios = result as ScenarioData[]);
  }

  openDialog(id: number) {
    const dialogRef = this.dialog.open(ModalDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result === true) {
        console.log('deleted');
      }
    });
  }

  runTest(index: number) {
    const el = document.querySelectorAll('.panelProgressBar')[index];
    if (el.classList.contains('hidden')) {
      el.classList.remove('hidden');
    }
    setTimeout(() => el.classList.add('hidden'), 4000);
  }

  getScenario(id: number) {
    this.selectedScenario = this.scenarios.find(x => x.id === id);
    this.editClick.emit();
  }

  deleteScenario(id: number) {
    console.log('Delete function!');
    this.openDialog(id);
  }
}
