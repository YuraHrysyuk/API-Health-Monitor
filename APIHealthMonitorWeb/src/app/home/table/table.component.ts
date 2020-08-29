import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointDataService } from '../../services/endpoint-data.service';
import { ScenarioDataService } from './../../services/scenario-data.service';
import { ScenarioData } from 'src/app/shared/scenario';
import { MatDialog } from '@angular/material/dialog';
import { ModalDialogComponent } from 'src/app/modal-dialog/modal-dialog.component';
import { Subscription, SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Output() editClick = new EventEmitter<boolean>();

  // private subscriptions: SubscriptionLike[] = [];

  selectedScenario: ScenarioData;
  tableColumns: string[] = ['name', 'createdOn', 'description', 'controlBar', 'arrow'];
  headers: string[] = ['Name', 'Created On', 'Comments'];
  dataSource: ScenarioData[];

  constructor(private router: Router, private data: ScenarioDataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.data.getScenarios().subscribe(result => this.dataSource = result as ScenarioData[]);
  }

  getScenario(index: number) {
    this.selectedScenario = this.dataSource.find(x => x.id === index);
    this.editClick.emit();
  }

  redirect(id: number){
    this.router.navigate(['end-points', id]);
  }

  deleteScenario(id: number){
    console.log(id);
    const dialogRef = this.dialog.open(ModalDialogComponent, {data: {title: 'Scenario'}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result === true) {
        this.data.removeScenario(id).subscribe();
      }
    });
  }
}
