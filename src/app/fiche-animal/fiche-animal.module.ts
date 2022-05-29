import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FicheAnimalRoutingModule } from './fiche-animal-routing.module';
import { FicheAnimalComponent } from './fiche-animal.component';
import { AddFicheAmimalComponent } from './add-fiche-amimal/add-fiche-amimal.component';
import { UpdateFicheAmimalComponent } from './update-fiche-amimal/update-fiche-amimal.component';
import { DeleteFicheAmimalComponent } from './delete-fiche-amimal/delete-fiche-amimal.component';
import {  FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetailFicheAnimalComponent } from './detail-fiche-animal/detail-fiche-animal.component';
import { SearchByEtatComponent } from './search-by-etat/search-by-etat.component';
import { SearchByEspeceComponent } from './search-by-espece/search-by-espece.component';
import { SearchByRaceComponent } from './search-by-race/search-by-race.component';
import { SearchByAgeComponent } from './search-by-age/search-by-age.component';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StatFicheAnimalComponent } from './stat-fiche-animal/stat-fiche-animal.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [FicheAnimalComponent, AddFicheAmimalComponent, UpdateFicheAmimalComponent, DeleteFicheAmimalComponent, DetailFicheAnimalComponent, SearchByEtatComponent, SearchByEspeceComponent, SearchByRaceComponent, SearchByAgeComponent, StatFicheAnimalComponent],
  imports: [
    CommonModule,
    FicheAnimalRoutingModule,
    ReactiveFormsModule,
    HttpClientModule ,
    DialogModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC3AI_68X9RvKX0MzD4SU18uHqz-08gM6Q'
    })
  ]
export class FicheAnimalModule { }
