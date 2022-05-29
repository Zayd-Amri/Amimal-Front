import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FicheAnimalService } from '../fiche-animal.service';

@Component({
  selector: 'app-search-by-espece',
  templateUrl: './search-by-espece.component.html',
  styleUrls: ['./search-by-espece.component.scss']
})
export class SearchByEspeceComponent implements OnInit {
  espece;
  listFiches;
  constructor(private route: ActivatedRoute, private _ficheService:FicheAnimalService) { }

  ngOnInit(): void {
    this.espece=this.route.snapshot.paramMap.get('espece');
    console.log("espece:",this.espece);
  this._ficheService.searchByEspece(this.espece).subscribe((data)=> {
    this.listFiches=data['hydra:member'];
    console.log(this.listFiches);
})
  }

}
