
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { TableComponent } from './table/table.component';
import { HomeComponent } from './home.component';
import { GridToolbarComponent } from './grid-toolbar/grid-toolbar.component';
import { SideBarFormComponent } from './side-bar-form/side-bar-form.component';

@NgModule({
  declarations: [HomeComponent, TableComponent, GridToolbarComponent, SideBarFormComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule
  ]
})
export class HomeModule { }
