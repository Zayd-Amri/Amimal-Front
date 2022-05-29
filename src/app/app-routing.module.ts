import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationGuard } from './administration/administration.guard';
import { HomeComponent } from './home/home.component';
import { ForbiddenComponent } from './shared/forbidden/forbidden.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'forbidden', component: ForbiddenComponent},
  { path: 'refuges', loadChildren: () => import('./refuges/refuges.module').then(m => m.RefugesModule) },
  { path: 'declaration', loadChildren: () => import('./declaration/declaration.module').then(m => m.DeclarationModule) },
  { path: 'intervention', loadChildren: () => import('./intervention/intervention.module').then(m => m.InterventionModule) },
  { path: 'adoption', loadChildren: () => import('./adoption/adoption.module').then(m => m.AdoptionModule) },
  { path: 'dons', loadChildren: () => import('./dons/dons.module').then(m => m.DonsModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'administration', loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule), canActivate: [AdministrationGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
