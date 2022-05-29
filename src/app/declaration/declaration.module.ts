import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeclarationRoutingModule } from './declaration-routing.module';
import { DeclarationComponent } from './declaration.component';
import { AddDeclarationComponent } from './add-declaration/add-declaration.component';
import { ShowDeclarationComponent } from './show-declaration/show-declaration.component';
import { DeleteDeclarationComponent } from './delete-declaration/delete-declaration.component';
import { UpdateDeclarationComponent } from './update-declaration/update-declaration.component';
import { ShowDeclarationByDateComponent } from './show-declaration-by-date/show-declaration-by-date.component';
import { ShowOneDeclarationComponent } from './show-one-declaration/show-one-declaration.component';

@NgModule({
  declarations: [
    DeclarationComponent,
     AddDeclarationComponent,
     ShowDeclarationComponent,
     DeleteDeclarationComponent,
     UpdateDeclarationComponent,
     ShowDeclarationByDateComponent,
     ShowOneDeclarationComponent,
     
    ],
  imports: [
    CommonModule,
    DeclarationRoutingModule,

  ]
})
export class DeclarationModule { 
  
}
