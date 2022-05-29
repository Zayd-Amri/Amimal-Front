import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AddDeclarationComponent } from './add-declaration/add-declaration.component';

import { DeclarationComponent } from './declaration.component';
import { DeleteDeclarationComponent } from './delete-declaration/delete-declaration.component';
import { ShowDeclarationByDateComponent } from './show-declaration-by-date/show-declaration-by-date.component';
import { ShowDeclarationComponent } from './show-declaration/show-declaration.component';
import { ShowOneDeclarationComponent } from './show-one-declaration/show-one-declaration.component';
import { UpdateDeclarationComponent } from './update-declaration/update-declaration.component';
import {MatDialogModule} from '@angular/material/dialog';

const routes: Routes = [
//{ path: '', component: DeclarationComponent },
{path: 'declaration', component: ShowDeclarationComponent} ,
{ path: 'add-declaration', component: AddDeclarationComponent},
{path: 'show-declaration-by-date', component: ShowDeclarationByDateComponent}, 
{path: 'show-one-declaration/:id', component: ShowOneDeclarationComponent} ,
{path: 'update-declaration/:id', component: UpdateDeclarationComponent},
{path: 'delete-declaration/:id', component: DeleteDeclarationComponent} 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [RouterModule,
  ReactiveFormsModule,
  MatDialogModule
]
})
export class DeclarationRoutingModule { }
