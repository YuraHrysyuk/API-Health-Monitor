import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [HomeComponent, TableComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
})
export class HomeModule { }
