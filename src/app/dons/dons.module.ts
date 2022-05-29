import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonsRoutingModule } from './dons-routing.module';
import { DonsComponent } from './dons.component';
import { ListDonComponent } from './list-don/list-don.component';
import { AddDonComponent } from './add-don/add-don.component';
import { DeleteDonComponent } from './delete-don/delete-don.component';
import { DetailDonComponent } from './detail-don/detail-don.component';
import { UpdateDonComponent } from './update-don/update-don.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DonsComponent, ListDonComponent, AddDonComponent, DeleteDonComponent, DetailDonComponent, UpdateDonComponent],
  imports: [
    CommonModule,
    DonsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DonsModule { }
