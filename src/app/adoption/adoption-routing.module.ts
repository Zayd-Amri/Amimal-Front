import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdoptionComponent } from './add-adoption/add-adoption.component';

import { AdoptionComponent } from './adoption.component';
import { DeleteAdoptionComponent } from './delete-adoption/delete-adoption.component';
import { DetailAdoptionComponent } from './detail-adoption/detail-adoption.component';
import { UpdateAdoptionComponent } from './update-adoption/update-adoption.component';

const routes: Routes = [{ path: '', component: AdoptionComponent },
                        { path: 'add-adoption', component: AddAdoptionComponent },
                        { path: 'update-adoption/:id', component: UpdateAdoptionComponent },
                        { path: 'delete-adoption/:id', component: DeleteAdoptionComponent },
                        { path: 'detail-adoption/:id', component: DetailAdoptionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdoptionRoutingModule { }
