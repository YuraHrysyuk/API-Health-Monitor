import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { Data } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  componentTitle = 'APIHealthMonitorWeb';

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.componentTitle);
  }
}
