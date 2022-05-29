import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

import { LoginComponent } from './login.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [{ path: '', component: LoginComponent },
{ path: 'sign-in', component: SignInComponent },
{ path: 'forget-password', component: ForgetPasswordComponent },
{ path: 'register', component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
