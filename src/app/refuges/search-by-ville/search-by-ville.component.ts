import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RefugeService } from '../refuge.service';

@Component({
  selector: 'app-search-by-ville',
  templateUrl: './search-by-ville.component.html',
  styleUrls: ['./search-by-ville.component.scss']
})
export class SearchByVilleComponent implements OnInit {
  ville;
  listRefuges;
  constructor(private route: ActivatedRoute, private _refugeService:RefugeService) { }

  ngOnInit(): void {
    this.ville=this.route.snapshot.paramMap.get('ville');
    console.log("ville:",this.ville);
  this._refugeService.searchByVille(this.ville).subscribe((data)=> {
    this.listRefuges=data['hydra:member'];
    console.log(this.listRefuges);
})
  }

}
