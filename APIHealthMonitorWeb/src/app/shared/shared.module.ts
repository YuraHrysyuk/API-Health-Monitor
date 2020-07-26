import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { AngularHelpComponent } from './../angular-help/angular-help.component';
import { NavbarComponent } from './../navbar/navbar.component';
import { SidebarComponent } from './../sidebar/sidebar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

import { GridToolbarComponent } from './../home/grid-toolbar/grid-toolbar.component';
import { TableComponent } from './../home/table/table.component';
import { HomeComponent } from './../home/home.component';

@NgModule({
  declarations: [AngularHelpComponent, NavbarComponent, SidebarComponent, HomeComponent, TableComponent, GridToolbarComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    MatIconModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    AngularHelpComponent,
    NavbarComponent,
    SidebarComponent,
    MatSidenavModule,
    MatIconModule
  ]
})
export class SharedModule { }
