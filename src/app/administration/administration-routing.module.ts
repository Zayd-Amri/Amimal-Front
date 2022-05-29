import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrationComponent } from './administration.component';
import { GestionDonsComponent } from './gestion-dons/gestion-dons.component';
import { GestionUsersComponent } from './gestion-users/gestion-users.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  { path: '', component: AdministrationComponent },
  { path: 'gestion-utilisateurs', component: GestionUsersComponent},
  { path: 'gestion-don', component: GestionDonsComponent},
  { path: 'update-user/:id', component: UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
