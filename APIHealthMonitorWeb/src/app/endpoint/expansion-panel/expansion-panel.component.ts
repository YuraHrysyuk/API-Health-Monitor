import { EndpointDataService } from './../endpoint-data.service';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ScenarioData } from '../scenario';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalDialogComponent } from '../../modal-dialog/modal-dialog.component';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit, OnDestroy {
  @Output() editClick = new EventEmitter<boolean>();
  @Output() deleteClick = new EventEmitter<string>();

  endPoints: ScenarioData[];
  scenarioId: number;
  selectedEndPoint: ScenarioData;
  panelOpenState = false;
  private routeParamSubscriber: Subscription;
  private getDataSubscriber: Subscription;
  private deleteRequestSubscriber: Subscription;
  constructor(
    public dialog: MatDialog,
    private data: EndpointDataService,
    private activateRoute: ActivatedRoute,
    private matSnackBar: MatSnackBar) {
    this.routeParamSubscriber = activateRoute.params.subscribe(params => this.scenarioId = params.id);
  }

  ngOnInit(): void {
    this.getDataSubscriber = this.data.getEndPoint(this.scenarioId).subscribe(result => this.endPoints = result as ScenarioData[]);
  }

  ngOnDestroy() {
    this.routeParamSubscriber.unsubscribe();
    this.routeParamSubscriber = null;
    this.getDataSubscriber.unsubscribe();
    this.getDataSubscriber = null;
    this.deleteRequestSubscriber.unsubscribe();
    this.deleteRequestSubscriber = null;
  }

  openSnackBar(message: string) {
    this.matSnackBar.open(message, 'DELETED', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  runTest(index: number) {
    const el = document.querySelectorAll('.panelProgressBar')[index];
    if (el.classList.contains('hidden')) {
      el.classList.remove('hidden');
    }
    setTimeout(() => el.classList.add('hidden'), 4000);
  }

  getEndPoint(id: number) {
    this.selectedEndPoint = this.endPoints.find(x => x.id === id);
    this.editClick.emit();
  }

  deleteEndPoint(endpoint: ScenarioData) {
    const dialogRef = this.dialog.open(ModalDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.deleteRequestSubscriber = this.data.deleteEndpoints(endpoint.id).subscribe(
          response => { this.openSnackBar(`${endpoint.name} - was deleted. Status: ${response.status}`); },
          error => { console.log(error.message); }
        );
      }
    });
  }
}
