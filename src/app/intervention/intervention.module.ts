import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterventionRoutingModule } from './intervention-routing.module';
import { InterventionComponent } from './intervention.component';
import { AddInterventionComponent } from './add-intervention/add-intervention.component';
import { UpdateInterventionComponent } from './update-intervention/update-intervention.component';
import { DeleteInterventionComponent } from './delete-intervention/delete-intervention.component';
import { ShowInterventionComponent } from './show-intervention/show-intervention.component';


@NgModule({
  declarations: [InterventionComponent, AddInterventionComponent, UpdateInterventionComponent, DeleteInterventionComponent, ShowInterventionComponent],
  imports: [
    CommonModule,
    InterventionRoutingModule
  ]
})
export class InterventionModule { }
