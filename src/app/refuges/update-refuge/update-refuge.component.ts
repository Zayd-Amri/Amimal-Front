import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RefugeService } from '../refuge.service';

@Component({
  selector: 'app-update-refuge',
  templateUrl: './update-refuge.component.html',
  styleUrls: ['./update-refuge.component.scss']
})
export class UpdateRefugeComponent implements OnInit {
  refugeId;
  updateForm = new FormGroup({
    ville: new FormControl(''),
    pays: new FormControl(''),
    telephone: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl('')
  });
  constructor(private _refugeService : RefugeService,
             private route : ActivatedRoute,
             private  _router : Router) { }

  ngOnInit(): void {
    this._refugeService.getRefugeById(this.route.snapshot.params.id).subscribe(data=> {
      this.updateForm = new FormGroup({
        ville: new FormControl(data['ville'],[Validators.required, Validators.pattern('[a-zA-Z]+')]),
        pays: new FormControl(data['pays'],[Validators.required]),
        telephone: new FormControl(data['telephone'],[Validators.required, Validators.pattern('[0-9]+')]),
        latitude: new FormControl(data['latitude'],[Validators.required, Validators.pattern('[0-9]+.[0-9]+')]),
        longitude: new FormControl(data['longitude'],[Validators.required, Validators.pattern('[0-9]+.[0-9]+')])
      });    }) 
  }
  updateRefuge(){
    this._refugeService.updateRefuge(this.route.snapshot.params.id,this.updateForm.value).subscribe((data)=>{
      console.log(data,"updated")
      this._router.navigate(['./refuges']);
    })
  }
}
