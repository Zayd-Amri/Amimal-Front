import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DeclarationService } from '../declaration.service';

@Component({
  selector: 'app-update-declaration',
  templateUrl: './update-declaration.component.html',
  styleUrls: ['./update-declaration.component.scss']
})
export class UpdateDeclarationComponent implements OnInit {
  alert:boolean=false;
  public collection:any;
  public govValue:any;

  declaration = new FormGroup({
    titre: new FormControl('',[Validators.required]),
    description: new FormControl(''),
    gouvernorat: new FormControl('',[Validators.required]),
    latitude: new FormControl('',[Validators.required]),
    longitude : new FormControl('',[Validators.required]),
    type :new FormControl('',[Validators.required]),

    image : new FormControl('')
  });
  constructor(private activatedRoute:ActivatedRoute,private declarationService:DeclarationService) { }
  ngOnInit(): void {
    this.declarationService.getGouvernorat().subscribe(result=>{
      this.collection=result;
      this.govValue=Object.keys(this.collection);
    });
    
    this.declarationService.getOneDeclaration(this.activatedRoute.snapshot.params.id).subscribe((result)=>{
      console.log(result);
      this.declaration = new FormGroup({
        titre: new FormControl(result['titre']),
        description: new FormControl(result['description']),
        gouvernorat: new FormControl(result['gouvernorat']),
        type : new FormControl(result['type']),
        longitude : new FormControl(result['longitude']),
        image : new FormControl(result['image']),

        latitude : new FormControl(result['latitude'])

      });
    })
  }
  updateDeclaration()
  {
    this.declarationService.updateDeclaration(this.activatedRoute.snapshot.params.id,this.declaration.value).subscribe((result)=>{
      console.log(result,"updated successfully");
      this.alert=true;
    });
  }
  remplirForm(_declaration)
  {
   this.declaration.setValue(_declaration);
  }
  closeAlert(){
    this.alert=false;
  }

}
