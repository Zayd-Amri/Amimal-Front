import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DeclarationService } from '../declaration.service';
import { Declaration } from '../declaration';

@Component({
  selector: 'app-show-one-declaration',
  templateUrl: './show-one-declaration.component.html',
  styleUrls: ['./show-one-declaration.component.scss']
})
export class ShowOneDeclarationComponent implements OnInit {
  alert:boolean=false;
  public collection:any;
  public govValue:any;

  declaration :any;
  constructor(private activatedRoute:ActivatedRoute,private declarationService:DeclarationService) { }
  
    ngOnInit(): void {
      this.declarationService.getOneDeclaration(this.activatedRoute.snapshot.params.id).subscribe(resultat=>
        {
          console.log(resultat);
  
          this.declaration=resultat;
        });
     
    }
}
