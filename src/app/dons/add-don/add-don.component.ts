import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DonsService } from '../dons.service';

@Component({
  selector: 'app-add-don',
  templateUrl: './add-don.component.html',
  styleUrls: ['./add-don.component.scss']
})
export class AddDonComponent implements OnInit {

  donForm : FormGroup;

  constructor(private _fb: FormBuilder, private _donService: DonsService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void{
    this.donForm =this._fb.group({
      label: '',
      montant:'',
      userId:''
    });
  }

  onSubmit() {
    console.log(this.donForm.value);
    this._donService.addDon(this.donForm.value).subscribe();
  }

}
