import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-panel-toolbar',
  templateUrl: './panel-toolbar.component.html',
  styleUrls: ['./panel-toolbar.component.scss']
})
export class PanelToolbarComponent implements OnInit {
  @Output() drawerToggleEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleDrawer() {
    this.drawerToggleEvent.emit();
  }
}
