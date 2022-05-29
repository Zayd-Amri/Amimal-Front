import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomvalidationService } from 'src/app/shared/customvalidation.service';
import { UsersService } from 'src/app/users/users.service';
import Swal from 'sweetalert2'
import { faArrowLeft  } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;
  submitted = false;
  faArrowLeft  = faArrowLeft ;

  constructor(
    private _fb: FormBuilder, 
    private _usersService: UsersService, 
    private _router :Router,
    private _customValidator : CustomvalidationService) { }


  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void{
    this.registerForm =this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password:['', Validators.compose([Validators.required, this._customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
      nom:['',Validators.required],
      prenom:['',Validators.required],
      age:['',Validators.required],
      adresse:['',Validators.required],
    },
    {
      validator: this._customValidator.MatchPassword('password', 'confirmPassword'),
    }
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if (this.registerForm.valid) {
    this._usersService.addUser(this.registerForm.getRawValue()).subscribe(
      resrponse =>{
        Swal.fire('votre compte a été enregistrée', 'merci de vérifier votre adresse email ' + this.registerForm.controls.email.value , 'success')
        this._router.navigate(['/login']);
      },
      error => {
        Swal.fire({
          title: 'Vous êtes déjà membre?',
          text: "cette email existe déja, veuillez vous authentifier",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#c1d35d',
          cancelButtonColor: '#4dbfe4',
          confirmButtonText: 'S\'authentifier'
        }).then((result) => {
          if (result.isConfirmed) {
            this._router.navigate(['/login']);
          }
        })
      }
    );
  }
  }

}
