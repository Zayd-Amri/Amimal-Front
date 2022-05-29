import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FicheAnimalService } from '../fiche-animal.service';

@Component({
  selector: 'app-delete-fiche-amimal',
  templateUrl: './delete-fiche-amimal.component.html',
  styleUrls: ['./delete-fiche-amimal.component.scss']
})
export class DeleteFicheAmimalComponent implements OnInit {
  ficheId: any;
  data: any;
constructor(private route: ActivatedRoute, private _ficheService: FicheAnimalService, private _router: Router) { }

  ngOnInit(): void {
    this.ficheId=this.route.snapshot.params['id'];
this._ficheService.deleteFicheAnimal(this.ficheId).subscribe((data)=>{
  this.data=data;
  console.log("deleted",data);
  this._router.navigate(['./fiche-animal']);
})
  }
}
