import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FicheAnimal } from 'src/app/model/fiche-animal.';
import { FicheAnimalService } from '../fiche-animal.service';

@Component({
  selector: 'app-search-by-etat',
  templateUrl: './search-by-etat.component.html',
  styleUrls: ['./search-by-etat.component.scss']
})
export class SearchByEtatComponent implements OnInit {
etat;
listFiches;
  constructor(private route: ActivatedRoute, private _ficheService:FicheAnimalService ) { }

  ngOnInit(): void {
      this.etat=this.route.snapshot.paramMap.get('etat');
        console.log("etat:",this.etat);
      this._ficheService.searchByEtat(this.etat).subscribe((data)=> {
        this.listFiches=data['hydra:member'];
        console.log(this.listFiches.length);
  })
  }

}
