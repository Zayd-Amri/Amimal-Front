import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UsersService } from 'src/app/users/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  userId : number;
  updateUserForm : FormGroup;
  currentUser : User;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  constructor(private _userService: UsersService, private _route : ActivatedRoute, private _fb : FormBuilder) { }

  ngOnInit(): void {
    this._route.params.subscribe(data =>{
      this.userId = data.id;
    })
    
    this.fetchUsers();
    
  }

  fetchUsers(){
    this._userService.viewUser(this.userId).subscribe(res => {console.log(res),this.currentUser = res,this.initForm(this.currentUser);});
  }

  initForm(user): void{
    this.updateUserForm = this._fb.group({
      email: [user.email, [Validators.required, Validators.email]],
      nom: [user.nom, [Validators.required]],
      prenom:[user.prenom,Validators.required],
      age:[user.age,Validators.required],
      adresse:[user.adresse,Validators.required],
      roles: this._fb.array([])
    });
  }


  updateUser(){
    this._userService.updateUser(this.updateUserForm.getRawValue(), this.userId).subscribe();
  }


  onCheckboxChange(e) {
    const checkArray: FormArray = this.updateUserForm.get('checkArray') as FormArray;
  
    if (e.source.checked) {
      checkArray.push(new FormControl(e.source.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.source.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

}
