import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { AngularHelpComponent } from './angular-help/angular-help.component';

const routes: Routes = [
  { path: 'about', component: AngularHelpComponent },
  { path: '**', redirectTo: '/'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
