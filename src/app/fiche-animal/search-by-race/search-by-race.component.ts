import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FicheAnimalService } from '../fiche-animal.service';

@Component({
  selector: 'app-search-by-race',
  templateUrl: './search-by-race.component.html',
  styleUrls: ['./search-by-race.component.scss']
})
export class SearchByRaceComponent implements OnInit {
  race;
  listFiches;
  constructor(private route: ActivatedRoute, private _ficheService:FicheAnimalService) { }

  ngOnInit(): void {
    this.race=this.route.snapshot.paramMap.get('race');
    console.log("race:",this.race);
  this._ficheService.searchByRace(this.race).subscribe((data)=> {
    this.listFiches=data['hydra:member'];
    console.log(this.listFiches);
})
  }

}
