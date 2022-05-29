import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefugesRoutingModule } from './refuges-routing.module';
import { RefugesComponent } from './refuges.component';
import { AddRefugeComponent } from './add-refuge/add-refuge.component';
import { UpdateRefugeComponent } from './update-refuge/update-refuge.component';
import { ShowRefugeComponent } from './show-refuge/show-refuge.component';
import { DeleteRefugeComponent } from './delete-refuge/delete-refuge.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchByVilleComponent } from './search-by-ville/search-by-ville.component';
import { SearchByPaysComponent } from './search-by-pays/search-by-pays.component';
import { AddCommentaireComponent } from './add-commentaire/add-commentaire.component';
import { MapsComponent } from './maps/maps.component';
import { AgmCoreModule } from '@agm/core';
import { DeleteCommentaireComponent } from './delete-commentaire/delete-commentaire.component';
import { UpdateCommentaireComponent } from './update-commentaire/update-commentaire.component';

@NgModule({
  declarations: [RefugesComponent, AddRefugeComponent, UpdateRefugeComponent, ShowRefugeComponent, DeleteRefugeComponent, SearchByVilleComponent, SearchByPaysComponent, AddCommentaireComponent, MapsComponent, DeleteCommentaireComponent, UpdateCommentaireComponent],
  imports: [
    CommonModule,
    RefugesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC3AI_68X9RvKX0MzD4SU18uHqz-08gM6Q'
    })
    ]
})
export class RefugesModule { }
