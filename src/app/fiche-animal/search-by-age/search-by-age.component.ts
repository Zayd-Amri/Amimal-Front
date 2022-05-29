import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FicheAnimalService } from '../fiche-animal.service';

@Component({
  selector: 'app-search-by-age',
  templateUrl: './search-by-age.component.html',
  styleUrls: ['./search-by-age.component.scss']
})
export class SearchByAgeComponent implements OnInit {
  age;
  listFiches;
  constructor(private route: ActivatedRoute, private _ficheService:FicheAnimalService) { }

  ngOnInit(): void {
    this.age=this.route.snapshot.paramMap.get('age');
    console.log("age:",this.age);
  this._ficheService.searchByAge(this.age).subscribe((data)=> {
    this.listFiches=data['hydra:member'];
    console.log(this.listFiches);
})
  }

}
