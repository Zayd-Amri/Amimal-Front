import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { RefugeService } from 'src/app/refuges/refuge.service';
import { FicheAnimalService } from '../fiche-animal.service';

@Component({
  selector: 'app-detail-fiche-animal',
  templateUrl: './detail-fiche-animal.component.html',
  styleUrls: ['./detail-fiche-animal.component.scss']
})
export class DetailFicheAnimalComponent implements OnInit {
  ficheId: any;
  data: any;
  refuge;
  refugeId;
  refugeDetails;
  role;
  userDetail;
  refugeIntId;
  refugeDetail;

  constructor(private route: ActivatedRoute,
              private _ficheAnimalService : FicheAnimalService,
              private _refugeService : RefugeService,
              private _authService: AuthService
              ) { }

  ngOnInit(): void {
  this._authService.user$.subscribe((data)=>{
    this.userDetail=data;
    this.role=this.userDetail.roles[0];
  })
    this.ficheId=this.route.snapshot.params['id'];
    this._ficheAnimalService.getFicheAnimalById(this.ficheId).subscribe(data =>{
    this.data=data;
    this.refuge=this.data.refuge;
    this.refugeId=new String(this.refuge).split("/")[3];
    this.refugeIntId=parseInt(this.refugeId);
    console.log(this.refugeIntId);
    this._refugeService.getRefugeById(this.refugeIntId).subscribe(res=>{
    this.refugeDetails=res;
    console.log(this.refugeDetails);
  })
})

}
}