import { EndpointDataService } from './../../endpoint/endpoint-data.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ScenarioData } from 'src/app/endpoint/scenario';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Output() editClick = new EventEmitter<boolean>();

  selectedScenario: ScenarioData;
  tableColumns: string[] = ['name', 'createdOn', 'description', 'controlBar', 'arrow'];
  headers: string[] = ['Name', 'Created On', 'Comments'];
  dataSource: ScenarioData[];
  constructor(private router: Router, private data: EndpointDataService) { }

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

}
