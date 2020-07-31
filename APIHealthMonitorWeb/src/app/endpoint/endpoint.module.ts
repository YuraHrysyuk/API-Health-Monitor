import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import { EndpointComponent } from './endpoint.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';



@NgModule({
  declarations: [EndpointComponent, ExpansionPanelComponent],
  imports: [
    CommonModule,
    MatExpansionModule
  ]
})
export class EndpointModule { }
