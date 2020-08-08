import { EndpointDataService } from './../endpoint-data.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ScenarioData } from '../scenario';
import { MatDialog } from '@angular/material/dialog';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {
  @Output() editClick = new EventEmitter<boolean>();
  @Output() deleteClick = new EventEmitter<string>();

  scenarios: ScenarioData[];
  selectedScenario: ScenarioData;
  panelOpenState = false;

  constructor(public dialog: MatDialog, private data: EndpointDataService) { }

  ngOnInit(): void {
    this.scenarios = this.data.getData();
  }

  openDialog(id: number) {
    const dialogRef = this.dialog.open(ModalDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result === true) {
        this.data.deleteScenario(id);
        console.log('deleted');
        this.scenarios = this.data.getData();
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
    this.data.findScenario(id);
    this.selectedScenario = this.data.getSelected();
    this.editClick.emit();
  }

  deleteScenario(id: number) {
    console.log('Delete function!');
    this.openDialog(id);
  }
}
