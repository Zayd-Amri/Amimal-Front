import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/model/user.model';
import { UsersService } from 'src/app/users/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.scss']
})
export class GestionUsersComponent implements OnInit {
  faEdit  = faEdit ;
  faTrash  = faTrash ;
  usersList : User;
  constructor(private _usersService : UsersService, private _router : Router) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  deleteUser(id){
    this._usersService.deleteUser(id).subscribe(
      resrponse =>{
        this.fetchUsers();
        Swal.fire('success', 'Utilisateur supprimé ' , 'success')
      },
      error => {
        Swal.fire({
          title: 'Error',
          text: "une erreur s'est produite",
          icon: 'error',
        })
      }
    )
  }

  fetchUsers(){
    this._usersService.getUser().subscribe((res) => {this.usersList = res})
  };

}
