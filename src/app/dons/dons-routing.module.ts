import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDonComponent } from './add-don/add-don.component';
import { DeleteDonComponent } from './delete-don/delete-don.component';
import { DetailDonComponent } from './detail-don/detail-don.component';

import { DonsComponent } from './dons.component';
import { ListDonComponent } from './list-don/list-don.component';
import { UpdateDonComponent } from './update-don/update-don.component';

const routes: Routes = [
  { path: '', component: DonsComponent },
  { path: 'list-don', component: ListDonComponent },
  { path: 'detail-don/:id', component: DetailDonComponent },
  { path: 'delete-don/:id', component: DeleteDonComponent },
  { path: 'add-don', component: AddDonComponent },
  { path: 'update-don/:id', component: UpdateDonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonsRoutingModule { }
