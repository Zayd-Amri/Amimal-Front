import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, } from '@angular/forms';
import { Router } from '@angular/router';
import { Refuge } from 'src/app/model/refuge.model';
import { apiUrl } from 'src/environments/environment';
import { RefugeService } from '../refuge.service';

@Component({
  selector: 'app-add-refuge',
  templateUrl: './add-refuge.component.html',
  styleUrls: ['./add-refuge.component.scss']
})
export class AddRefugeComponent implements OnInit {
  addForm = new FormGroup({
    ville: new FormControl(''),
    pays: new FormControl(''),
    telephone: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl('')
  }); 
  constructor(private _refugeService: RefugeService, private _router : Router, private http: HttpClient) { }

  ngOnInit(): void {  }
  createRefuge()
  {
    console.log(this.addForm.value);
    this._refugeService.addRefuge(this.addForm.value).subscribe()
  }
}