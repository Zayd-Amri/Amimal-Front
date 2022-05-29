import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { FicheAnimalService } from 'src/app/fiche-animal/fiche-animal.service';
import { Commentaire } from 'src/app/model/commentaire.model';
import { UsersService } from 'src/app/users/users.service';
import { RefugeService } from '../refuge.service';

@Component({
  selector: 'app-add-commentaire',
  templateUrl: './add-commentaire.component.html',
  styleUrls: ['./add-commentaire.component.scss']
})
export class AddCommentaireComponent implements OnInit {
  refugeId:number;
  data: any;
  addComment = new FormGroup({
    user: new FormControl(''),
    refuge: new FormControl(''),
    contenu: new FormControl('')
  });
  userEmail;
  userData;
  userDetails;
  listCommentaires:any;
  userId;
  user;
  userArray=[];
  userList;
  userDetail;
  role;

  constructor(private _refugeService : RefugeService,
              private route: ActivatedRoute,
              private _authService : AuthService,
              private _ficheAnimalService:FicheAnimalService,
              private _userService:UsersService,
              private _router: Router) { }

  ngOnInit(): void {
    this._authService.user$.subscribe((data)=>{
      this.userDetail=data;
      this.role=this.userDetail.roles[0];
    })
    this.userData=this._authService.user$.value;
    console.log("user data",this.userData);
    this.userEmail=this.userData.username;
    this._ficheAnimalService.getUserByEmail(this.userEmail).subscribe((data)=>{
      this.userDetails=data[0];
      console.log("user détails by mail",this.userDetails);
      this.userId=this.userDetails.id;
      console.log("current user id =",this.userId);
    })


    this.refugeId=this.route.snapshot.params['id'];
    this._refugeService.getCommentaireByRefuge(this.refugeId).subscribe((res)=>{
      this.listCommentaires=res['hydra:member'];
      console.log("user",this.listCommentaires);
        for(let commentaire of this.listCommentaires){
          this.user=commentaire.user;
          console.log("user",this.user);
          this.userId=new String(this.user).split("/")[3];
          this._userService.viewUser(this.userId).subscribe((data)=>{
          this.userDetails=data;
          this.userArray.push(this.userDetails);
          })
        }
        this.userList=this.userArray;
        console.log(this.userList)
    });
      this._refugeService.getRefugeById(this.refugeId).subscribe(data =>{
        this.data=data;
        console.log(data);
      });
  }
onComment(){
  this.addComment.value.user ='/api/users/1';
  this.addComment.value.refuge ='/api/refuges/'+this.refugeId;
  console.log(this.addComment.value);
  this._refugeService.addCommentaire(this.addComment.value).subscribe();
}
}