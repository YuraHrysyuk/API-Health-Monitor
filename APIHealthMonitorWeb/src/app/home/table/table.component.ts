import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ScenarioData } from 'src/app/endpoint/scenario';
import { ScenarioDataService } from './../scenario-data.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalDialogComponent } from '../../modal-dialog/modal-dialog.component';
import { Subscription } from 'rxjs';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {
  @Output() editClick = new EventEmitter<boolean>();

  selectedScenario: ScenarioData;
  tableColumns: string[] = ['name', 'createdOn', 'description', 'controlBar', 'arrow'];
  headers: string[] = ['Name', 'Created On', 'Comments'];
  dataSource: ScenarioData[];

  getDataSubscriber: Subscription;
  deleteRequestSubscriber: Subscription;
  constructor(
    private router: Router,
    private data: ScenarioDataService,
    private matDialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getDataSubscriber = this.data.getScenarios().subscribe(result => this.dataSource = result as ScenarioData[]);
  }

  ngOnDestroy() {
    this.getDataSubscriber.unsubscribe();
    this.getDataSubscriber = null;
    this.deleteRequestSubscriber.unsubscribe();
    this.deleteRequestSubscriber = null;
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'DELETED', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  getScenario(index: number) {
    this.selectedScenario = this.dataSource.find(x => x.id === index);
    this.editClick.emit();
  }

  deleteScenario(scenario: ScenarioData) {
    console.log(scenario);
    const modalDialog = this.matDialog.open(ModalDialogComponent);
    modalDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.deleteRequestSubscriber = this.data.deleteScenario(scenario.id).subscribe(
          response => { this.openSnackBar(`${scenario.name} - was deleted. Status: ${response.status}`); },
          error => { console.log(error.message); }
        );
      }
    });
  }

  redirect(id: number) {
    this.router.navigate(['end-points', id]);
  }
}
