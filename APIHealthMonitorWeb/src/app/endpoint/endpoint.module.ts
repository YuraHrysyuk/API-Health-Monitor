import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDividerModule} from '@angular/material/divider';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { EndpointComponent } from './endpoint.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { PanelToolbarComponent } from './panel-toolbar/panel-toolbar.component';
import { EndpointFormComponent } from './endpoint-form/endpoint-form.component';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';


@NgModule({
  declarations: [EndpointComponent, ExpansionPanelComponent, PanelToolbarComponent, EndpointFormComponent, ModalDialogComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatDividerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule
  ],
  entryComponents: [ModalDialogComponent]
})
export class EndpointModule { }
