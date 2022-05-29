import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { FicheAnimalService } from 'src/app/fiche-animal/fiche-animal.service';
import { RefugeService } from '../refuge.service';

@Component({
  selector: 'app-show-refuge',
  templateUrl: './show-refuge.component.html',
  styleUrls: ['./show-refuge.component.scss']
})
export class ShowRefugeComponent implements OnInit {

  refugeId: any;
  data: any;
  animals;
  nbAnimaux:number;
  res;
  userDetail;
  role;
  constructor(private route: ActivatedRoute,
    private _refugeService : RefugeService,
    private _ficheAnimalService : FicheAnimalService,
    private _authService: AuthService
    ) { }

  ngOnInit(): void {
    this._authService.user$.subscribe((data)=>{
      this.userDetail=data;
      this.role=this.userDetail.roles[0];
    })
    this.refugeId=this.route.snapshot.params['id'];
    this._refugeService.getRefugeById(this.refugeId).subscribe(data =>{
      this.data=data;
      console.log(data);
    });
    this.animals=this._ficheAnimalService.searchByRefuge(this.refugeId).subscribe(res=>{
      this.res=res['hydra:member'];
      this.nbAnimaux=this.res.length;
    })
  }

}
