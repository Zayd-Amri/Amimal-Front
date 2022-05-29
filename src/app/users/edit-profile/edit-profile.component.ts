import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UsersService } from '../users.service';
import { faSignOutAlt  } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  userId: User;
  userDetail : User;
  updateUserForm : FormGroup;
  faSignOutAlt  = faSignOutAlt ;

  constructor(
    private _route: ActivatedRoute, 
    private _usersService: UsersService,
    private _router : Router,
    private _fb: FormBuilder,
    private _authService : AuthService,
    ) { }

  ngOnInit(): void {
    this._route.params.subscribe(data => {
      this.userId = data.id;
    });
    this._usersService.viewUser(this.userId).subscribe(data =>{
      this.userDetail = data;
      console.log(data)
      this.initForm();
    });
    
  }

  initForm(): void{
    console.log(this.userDetail.nom);
    this.updateUserForm = this._fb.group({
      nom:[this.userDetail.nom,Validators.required],
      prenom:[this.userDetail.prenom,Validators.required],
      adresse:[this.userDetail.adresse,Validators.required],
      age:[this.userDetail.age,Validators.required],
      email: [this.userDetail.email, [Validators.required, Validators.email]],
    });
  }

  onSubmit(){
    this._usersService.updateUser(this.updateUserForm.getRawValue(),this.userId).subscribe();
  }

  logOut() {
    this._authService.logout();
    this._router.navigateByUrl('/login');
  }

}
