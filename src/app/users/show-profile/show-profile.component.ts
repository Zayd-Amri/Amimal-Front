import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CloudinaryImage } from '@cloudinary/base';
import { faMoneyBill, faTrash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/auth.service';
import { DonsService } from 'src/app/dons/dons.service';
import { Don } from 'src/app/model/don.model';
import { User } from 'src/app/model/user.model';
import { SharedService } from 'src/app/shared/shared.service';
import Swal from 'sweetalert2';
import { UsersService } from '../users.service';
import { faSignOutAlt  } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.scss']
})
export class ShowProfileComponent implements OnInit {
  userId: User;
  userDetail : User;
  donsList : Don;
  donsByUser: Don;
  faMoneyBill= faMoneyBill;
  faTrash= faTrash;
  alert:boolean=false;
  alertUpload:boolean=false;
  urlImageCloudUser:string="";
  uploadForm: FormGroup;
  img: CloudinaryImage;
  userForm :FormGroup;
  faSignOutAlt  = faSignOutAlt ;


  constructor(
    private _route: ActivatedRoute, 
    private _usersService: UsersService,
    private _donService : DonsService,
    private _router : Router,
    private _authService : AuthService,
    private _sharedService : SharedService,
    private _fb : FormBuilder

    ) { }

  ngOnInit(): void {

    this._route.params.subscribe(data => {
      this.userId = data.id;
    });
    this.fetchUsers();
    this._donService.getDon().subscribe(data => this.donsList = data)
    this._donService.viewDonByUser(this.donsList, this.userId ).subscribe(data => {this.donsByUser = data;})
  }

  fetchUsers(){
    this._usersService.viewUser(this.userId).subscribe((data) =>{
      this.userDetail = data;
      this.initForm(this.userDetail);
    });
  }

  initForm(user): void{
    this.userForm = this._fb.group({
      email: [user.email],
      roles: [user.roles],
      nom: [user.nom],
      prenom:[user.prenom],
      age:[user.age],
      adresse:[user.adresse],
      imgUrl: ['']
    });
  }




  logOut() {
    this._authService.logout();
    this._router.navigateByUrl('/login');
  }

  onFileSelected(event) {

    const file:File = event.target.files[0];
        if (file) {
        let formData = new FormData();
        //console.log(this.uploadForm.get('image').value+"abc");
        //check if the filecount is greater than zero, to be sure a file was selected.
        formData.append('upload_preset', 'bx6gow1n');
        formData.append('file', file);
        this._sharedService.uploadImageService(formData).subscribe((result)=>{
          console.log(result,"updated successfully");
          this.urlImageCloudUser = result["url"];
          console.log('outside '+this.urlImageCloudUser );

          this.userForm.patchValue({
            imgUrl: this.urlImageCloudUser, 
          });

          console.log(this.userForm.getRawValue());
      
          this._usersService.updateUser(this.userForm.getRawValue(),this.userDetail.id).subscribe()
          this.fetchUsers();
          this.alertUpload=true;
        }); 
    }



  }

  

}
