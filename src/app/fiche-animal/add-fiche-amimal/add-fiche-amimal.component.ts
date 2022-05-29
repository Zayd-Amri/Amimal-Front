import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FicheAnimalService } from '../fiche-animal.service';
@Component({
  selector: 'app-add-fiche-amimal',
  templateUrl: './add-fiche-amimal.component.html',
  styleUrls: ['./add-fiche-amimal.component.scss']
})
export class AddFicheAmimalComponent implements OnInit {
  addForm = new FormGroup({
    nom: new FormControl(''),
    age: new FormControl(''),
    espece: new FormControl(''),
    race: new FormControl(''),
    couleur: new FormControl(''),
    etat: new FormControl(''),
    sexe: new FormControl('')
  });
  constructor(private _ficheAnimalService: FicheAnimalService , private _router: Router) {  }

  ngOnInit(): void {  }
  createFiche()
  {
    console.log(this.addForm.value);
    this._ficheAnimalService.addFicheAnimal(this.addForm.value).subscribe((result)=>{
      console.log("Get data from service",result)
      this._router.navigate(['./fiche-animal']);
    })
  }

}
