import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterventionComponent } from './intervention.component';

const routes: Routes = [{ path: 'intervention', component: InterventionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterventionRoutingModule { }
