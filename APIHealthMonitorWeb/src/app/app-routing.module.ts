import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AngularHelpComponent } from './angular-help/angular-help.component';
import { EndpointComponent } from './endpoint/endpoint.component';



const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  { path: 'angular-helper', component: AngularHelpComponent },
  {path: 'end-points', component: EndpointComponent},
  { path: '**', redirectTo: '/home'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
