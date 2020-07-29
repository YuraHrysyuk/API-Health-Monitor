
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TableComponent } from './table/table.component';
import { HomeComponent } from './home.component';
import { GridToolbarComponent } from './grid-toolbar/grid-toolbar.component';
@NgModule({
  declarations: [HomeComponent, TableComponent, GridToolbarComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class HomeModule { }
