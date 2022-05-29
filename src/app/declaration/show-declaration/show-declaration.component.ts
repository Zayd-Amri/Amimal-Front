import { Component, OnInit } from '@angular/core';
import { Declaration } from '../declaration';
import { DeclarationService } from '../declaration.service';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { AddDeclarationComponent } from '../add-declaration/add-declaration.component';
import { UpdateDeclarationComponent } from '../update-declaration/update-declaration.component';
import {Cloudinary, CloudinaryFile, CloudinaryImage} from '@cloudinary/base';
import {fill} from '@cloudinary/base/actions/resize';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-show-declaration',
  templateUrl: './show-declaration.component.html',
  styleUrls: ['./show-declaration.component.scss']
})
export class ShowDeclarationComponent implements OnInit {

  img: CloudinaryImage;

  declarations :Declaration;
  declaration = new FormGroup({
    id: new FormControl('',[Validators.required]),

    titre: new FormControl('',[Validators.required]),
    description: new FormControl(''),
    gouvernorat: new FormControl('',[Validators.required]),
    latitude: new FormControl('',[Validators.required]),
    longitude : new FormControl('',[Validators.required]),
    type :new FormControl('',[Validators.required]),

    image : new FormControl('')
  });
  
  constructor(private declarationService:DeclarationService,private dialog:MatDialog) { }

  ngOnInit(): void {
   
   

    this.declarationService.getDeclarations().subscribe(resultat=>
      {
        console.log(resultat["hydra:member"]);
        
         
        this.declarations=resultat["hydra:member"];

      });
     
     
      
  }
  onCreate()
  {
    const dialogConfig =new MatDialogConfig();
    dialogConfig.autoFocus=true;
    this.dialog.open(AddDeclarationComponent,dialogConfig);
  }
  deleteEvent(id)
  {
  this.declarationService.deleteDeclaration(id).subscribe((res)=>
  {
    this.ngOnInit();
    console.log(res);
  })
  }
  

  
  /*onUpdate(row)
  { console.log(row)  ;
    remplirForm(row);
    const dialogConfig =new MatDialogConfig();
    dialogConfig.autoFocus=true;
    this.dialog.open(UpdateDeclarationComponent);
  }
*/
}
