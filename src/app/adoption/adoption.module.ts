import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdoptionRoutingModule } from './adoption-routing.module';
import { AdoptionComponent } from './adoption.component';
import { AddAdoptionComponent } from './add-adoption/add-adoption.component';
import { DeleteAdoptionComponent } from './delete-adoption/delete-adoption.component';
import { UpdateAdoptionComponent } from './update-adoption/update-adoption.component';
import { DetailAdoptionComponent } from './detail-adoption/detail-adoption.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdoptionComponent, AddAdoptionComponent, DeleteAdoptionComponent, UpdateAdoptionComponent, DetailAdoptionComponent],
  imports: [
    CommonModule,
    AdoptionRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdoptionModule { }
