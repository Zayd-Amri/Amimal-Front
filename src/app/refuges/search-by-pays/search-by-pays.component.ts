import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RefugeService } from '../refuge.service';

@Component({
  selector: 'app-search-by-pays',
  templateUrl: './search-by-pays.component.html',
  styleUrls: ['./search-by-pays.component.scss']
})
export class SearchByPaysComponent implements OnInit {
  pays;
  listRefuges;
  constructor(private route: ActivatedRoute, private _refugeService:RefugeService) { }

  ngOnInit(): void {
    this.pays=this.route.snapshot.paramMap.get('pays');
    console.log("pays:",this.pays);
  this._refugeService.searchByPays(this.pays).subscribe((data)=> {
    this.listRefuges=data['hydra:member'];
    console.log(this.listRefuges);
})
  }

}
