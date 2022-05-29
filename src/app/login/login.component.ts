import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import Swal from 'sweetalert2'
import { CustomvalidationService } from '../shared/customvalidation.service';
import { UsersService } from '../users/users.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;
  submitted = false;
  userEmail : User

  constructor(
    private _authService: AuthService, 
    private _fb: FormBuilder, 
    private _http : HttpClient, 
    private _router: Router,
    private _usersService : UsersService
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void{
    this.signInForm =this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password:['',Validators.required],
    });
  }

  get registerFormControl() {
    return this.signInForm.controls;
  }

  onSubmit() {
    const val = this.signInForm.value;
    this.submitted = true;
    if (this.signInForm.valid) {
    if (val.email && val.password) {
        this._authService.login(val.email, val.password)
            .subscribe(
              resrponse => {
                    console.log("User is logged in", resrponse);
                    this._usersService.getUserByEmail(val.email).subscribe(res=> {
                      console.log(res);
                      this.userEmail = res[0];
                      console.log(this.userEmail.id);
                      this._router.navigateByUrl('users/shwo-profile/'+ this.userEmail.id);
                    })
                    Swal.fire('Bien venue', 'Restez Ami Mal', 'success')
                },
                error => {
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'email ou mot de passe incorrect',
                  })
                }
            );
    }
  }
    }
  }
