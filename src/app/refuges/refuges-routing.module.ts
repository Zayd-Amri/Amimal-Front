import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { update } from 'lodash';
import { AddCommentaireComponent } from './add-commentaire/add-commentaire.component';
import { AddRefugeComponent } from './add-refuge/add-refuge.component';
import { DeleteCommentaireComponent } from './delete-commentaire/delete-commentaire.component';
import { DeleteRefugeComponent } from './delete-refuge/delete-refuge.component';
import { MapsComponent } from './maps/maps.component';

import { RefugesComponent } from './refuges.component';
import { SearchByPaysComponent } from './search-by-pays/search-by-pays.component';
import { SearchByVilleComponent } from './search-by-ville/search-by-ville.component';
import { ShowRefugeComponent } from './show-refuge/show-refuge.component';
import { UpdateCommentaireComponent } from './update-commentaire/update-commentaire.component';
import { UpdateRefugeComponent } from './update-refuge/update-refuge.component';

const routes: Routes = [{ path: '', component: RefugesComponent },
{ path: 'add-refuge', component: AddRefugeComponent },
{ path: 'update-refuge/:id', component: UpdateRefugeComponent },
{ path: 'delete-refuge/:id', component: DeleteRefugeComponent },
{ path: 'show-refuge/:id', component: ShowRefugeComponent },
{ path: 'search-by-ville/:ville', component: SearchByVilleComponent },
{ path: 'search-by-pays/:pays', component: SearchByPaysComponent },
{ path: 'add-commentaire/:id', component: AddCommentaireComponent },
{ path: 'delete-commentaire/:id', component: DeleteCommentaireComponent },
{ path: 'update-commentaire/:id', component: UpdateCommentaireComponent },

{ path: 'google-map', component: MapsComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefugesRoutingModule { }
