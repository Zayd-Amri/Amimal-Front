import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { GestionUsersComponent } from './gestion-users/gestion-users.component';
import { GestionDonsComponent } from './gestion-dons/gestion-dons.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [AdministrationComponent, GestionUsersComponent, GestionDonsComponent, AdminNavComponent, AdminFooterComponent, AdminSidebarComponent, UpdateUserComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    FontAwesomeModule,
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AdministrationModule { }
