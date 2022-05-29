import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RefugeService } from '../refuge.service';

@Component({
  selector: 'app-update-commentaire',
  templateUrl: './update-commentaire.component.html',
  styleUrls: ['./update-commentaire.component.scss']
})
export class UpdateCommentaireComponent implements OnInit {
  updateForm = new FormGroup({
    contenu: new FormControl('')
  });
  user;
  refuge;
  refugeDetails;
  constructor(private _refugeService : RefugeService,
    private route : ActivatedRoute,
    private  _router : Router) { }

    ngOnInit(): void {
  this._refugeService.getCommentaireById(this.route.snapshot.params.id).subscribe(data=> {
    this.user=data.user;
    this.refuge=data.refuge.split("/")[3];
    this.updateForm = new FormGroup({
      user: new FormControl(data['user']),
      refuge: new FormControl(data['refuge']),
      contenu: new FormControl(data['contenu'])
    });    
    this._refugeService.getRefugeById(this.refuge).subscribe((data)=>{
      this.refugeDetails=data;
    })
  
  }) 

    
}
updateCommentaire(){
  this._refugeService.updateCommentaire(this.route.snapshot.params.id,this.updateForm.value).subscribe((data)=>{
    console.log(data,"updated")
    this._router.navigate(['./refuges']);
  })
}

}
