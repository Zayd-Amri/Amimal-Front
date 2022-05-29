import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailFicheAnimalComponent } from './detail-fiche-animal/detail-fiche-animal.component';
import { AddFicheAmimalComponent } from './add-fiche-amimal/add-fiche-amimal.component';
import { DeleteFicheAmimalComponent } from './delete-fiche-amimal/delete-fiche-amimal.component';
import { FicheAnimalComponent } from './fiche-animal.component';
import { UpdateFicheAmimalComponent } from './update-fiche-amimal/update-fiche-amimal.component';
import { SearchByEtatComponent } from './search-by-etat/search-by-etat.component';
import { SearchByEspeceComponent } from './search-by-espece/search-by-espece.component';
import { SearchByRaceComponent } from './search-by-race/search-by-race.component';
import { SearchByAgeComponent } from './search-by-age/search-by-age.component';
import { StatFicheAnimalComponent } from './stat-fiche-animal/stat-fiche-animal.component';

const routes: Routes = [
                         { path: '', component: FicheAnimalComponent },
                        { path: 'add-fiche-animal', component: AddFicheAmimalComponent },
                        { path: 'update-fiche-animal/:id', component: UpdateFicheAmimalComponent },
                        { path: 'delete-fiche-animal/:id', component: DeleteFicheAmimalComponent },
                        { path: 'detail-fiche-animal/:id', component: DetailFicheAnimalComponent },
                        { path: 'search-by-etat/:etat', component: SearchByEtatComponent },
                        { path: 'search-by-espece/:espece', component: SearchByEspeceComponent },
                        { path: 'search-by-race/:race', component: SearchByRaceComponent },
                        { path: 'search-by-age/:age', component: SearchByAgeComponent },
                        { path: 'stat-fiche-animal', component: StatFicheAnimalComponent }
                      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FicheAnimalRoutingModule { }
