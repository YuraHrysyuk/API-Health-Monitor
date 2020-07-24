import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { AngularHelpComponent } from './angular-help/angular-help.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    AngularHelpComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    BrowserAnimationsModule,
    HomeModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
