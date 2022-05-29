import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FicheAnimalService } from '../fiche-animal.service';

@Component({
  selector: 'app-update-fiche-amimal',
  templateUrl: './update-fiche-amimal.component.html',
  styleUrls: ['./update-fiche-amimal.component.scss']
})
export class UpdateFicheAmimalComponent implements OnInit {
  updateForm = new FormGroup({
    nom: new FormControl(''),
    age: new FormControl(''),
    espece: new FormControl(''),
    race: new FormControl(''),
    couleur: new FormControl(''),
    etat: new FormControl(''),
    sexe: new FormControl('')
  });
  constructor(private _ficheAnimalService : FicheAnimalService, private route : ActivatedRoute,private  _router : Router) { }

  ngOnInit(): void {
    this._ficheAnimalService.getFicheAnimalById(this.route.snapshot.params.id).subscribe(data=> {
      this.updateForm = new FormGroup({
        nom: new FormControl(data['nom'],[Validators.required, Validators.pattern('[a-zA-Z]+')]),
        age: new FormControl(data['age'],[Validators.required]),
        espece: new FormControl(data['espece'],[Validators.required]),
        race: new FormControl(data['race'],[Validators.required, Validators.pattern('[a-zA-Z]+')]),
        couleur: new FormControl(data['couleur'],[Validators.required, Validators.pattern('[a-zA-Z]+')]),
        etat: new FormControl(data['etat'],[Validators.required]),
        sexe: new FormControl(data['sexe'],[Validators.required])
      });    })
  }
updateFiche(){
  this._ficheAnimalService.updateFicheAnimal(this.route.snapshot.params.id,this.updateForm.value).subscribe((data)=>{
    console.log(data,"updated")
    this._router.navigate(['./fiche-animal']);
  })
}
}
