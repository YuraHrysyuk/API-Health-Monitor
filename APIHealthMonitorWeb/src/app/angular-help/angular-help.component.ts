import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-angular-help',
  templateUrl: './angular-help.component.html',
  styleUrls: ['./angular-help.component.scss']
})
export class AngularHelpComponent implements OnInit {
  componentTitle = 'Angular Helper';
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.componentTitle);
  }

}
