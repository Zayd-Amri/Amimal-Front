import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FicheAnimalService } from '../fiche-animal/fiche-animal.service';
import { Adoption } from '../model/adoption';
import { FicheAnimal } from '../model/fiche-animal.';
import { UsersService } from '../users/users.service';
import { AdoptionService } from './adoption.service';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.scss']
})
export class AdoptionComponent implements OnInit {
  listAdoptions;
  detailAnimals;
  listUsers;
  animalId;
  userId;
  animalIdArray:number[]=[];
  animalIdInt:number;
  constructor(private _adoptionService: AdoptionService ,  private route: ActivatedRoute,
    router: Router, private _ficheAnimalService:FicheAnimalService, private _userService:UsersService) { }

  ngOnInit(): void {
    this._adoptionService.getAdoption().subscribe((data)=> 
    {this.listAdoptions=data['hydra:member'];
    console.log(this.listAdoptions);
    for(let adoption of this.listAdoptions){
      this.animalId=new String(adoption.animal).split("/")[3];
      this.animalIdInt=parseInt(this.animalId);
      console.log("id:",this.animalIdInt);
      this._ficheAnimalService.getFicheAnimalById(this.animalIdInt).subscribe((animalDetails)=>{
        console.log(animalDetails);
      })
    }
})

  }
listUser(id){
this._adoptionService.getUserById(id).subscribe((data)=> 
{this.listUsers=data['hydra:member'];
console.log(this.listUsers);
})
}
}
