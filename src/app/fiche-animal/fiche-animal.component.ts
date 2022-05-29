import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FicheAnimalService } from './fiche-animal.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AdoptionService } from '../adoption/adoption.service';
import {fill} from '@cloudinary/base/actions/resize';
import {Cloudinary, CloudinaryFile, CloudinaryImage} from '@cloudinary/base';
import { RefugeService } from '../refuges/refuge.service';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-fiche-animal',
  templateUrl: './fiche-animal.component.html',
  styleUrls: ['./fiche-animal.component.scss']
})
export class FicheAnimalComponent implements OnInit {
  addAdoption: FormGroup;
  closeResult: string;
  listFiches;
  listRefuges;
  public nbperdu: number;
public nbadopte: number;
public nbaadopter: number;
public nbChien: number;
public nbChat: number;
public nbLapin: number;
public nbAnimaux: number;
public nbAutre:number;
chien;
chat;
lapin;
autre;
perdu;
aadopter;
adopte;
listPerdu;
listAdopte;
listAadopter;
listChien;
listChat;
listLapin;
listAutre;
userEmail;
 urlImageCloud:string="";
 addForm = new FormGroup({
    nom: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+')]),
    age: new FormControl('',[Validators.required]),
    espece: new FormControl('',[Validators.required]),
    race: new FormControl('',[Validators.pattern('[a-zA-Z]+')]),
    couleur: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+')]),
    etat: new FormControl('',[Validators.required]),
    sexe: new FormControl('',[Validators.required]),
    refuge: new FormControl('')
  });
  updateForm:FormGroup;
  searchForm = new FormGroup({
    critere: new FormControl(''),
    recherche: new FormControl('')
  });
  rech;
  critere;
  uploadForm : FormGroup;
  alertUpload:boolean=false;
  userData;
  userDetails;
  userDataById;
  userId;
  userDetail;
  role;
  constructor(private _ficheAnimalService: FicheAnimalService,
              private route: ActivatedRoute,
              private _router: Router,
              private modalService: NgbModal,
              private _adoptionService : AdoptionService,
              private _refugeService : RefugeService,
              private formbuilder:FormBuilder,
              private _authService:AuthService,
              private _userService:UsersService)
              { }

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
    })
    this._ficheAnimalService.getFicheAnimal().subscribe((data) => 
    {this.listFiches = data['hydra:member'];
      });

      this._ficheAnimalService.getFicheAnimal().subscribe((data) => {
        this.listFiches = data['hydra:member'];
        this.nbAnimaux=this.listFiches.length;
      this._ficheAnimalService.searchByEspece('chien').subscribe((data)=> {
        this.listChien=data['hydra:member'];
        this.nbChien=this.listChien.length;
        this.chien=document.getElementById('chien');
        this.chien.style.width=(this.nbChien/this.nbAnimaux)*100+"%";
      });
    });

    this._ficheAnimalService.getFicheAnimal().subscribe((data) => {
      this.listFiches = data['hydra:member'];
      this.nbAnimaux=this.listFiches.length;
    this._ficheAnimalService.searchByEspece('chat').subscribe((data)=> {
      this.listChat=data['hydra:member'];
      this.nbChat=this.listChat.length;
      this.chat=document.getElementById('chat');
      this.chat.style.width=(this.nbChat/this.nbAnimaux)*100+"%";
    });
  });


  this._ficheAnimalService.getFicheAnimal().subscribe((data) => {
    this.listFiches = data['hydra:member'];
    this.nbAnimaux=this.listFiches.length;
  this._ficheAnimalService.searchByEspece('lapin').subscribe((data)=> {
    this.listLapin=data['hydra:member'];
    this.nbLapin=this.listChat.length;
    this.lapin=document.getElementById('lapin');
    this.lapin.style.width=(this.nbLapin/this.nbAnimaux)*100+"%";
  });
});


this._ficheAnimalService.getFicheAnimal().subscribe((data) => {
  this.listFiches = data['hydra:member'];
  this.nbAnimaux=this.listFiches.length;
this._ficheAnimalService.searchByEspece('autre').subscribe((data)=> {
  this.listAutre=data['hydra:member'];
  this.nbAutre=this.listAutre.length;
  this.autre=document.getElementById('autre');
  this.autre.style.width=(this.nbAutre/this.nbAnimaux)*100+"%";
});
});




this._ficheAnimalService.getFicheAnimal().subscribe((data) => {
  this.listFiches = data['hydra:member'];
  this.nbAnimaux=this.listFiches.length;
this._ficheAnimalService.searchByEtat('perdu').subscribe((data)=> {
  this.listPerdu=data['hydra:member'];
  this.nbperdu=this.listPerdu.length;
  this.perdu=document.getElementById('perdu');
  this.perdu.style.width=(this.nbperdu/this.nbAnimaux)*100+"%";
});
});

this._ficheAnimalService.getFicheAnimal().subscribe((data) => {
  this.listFiches = data['hydra:member'];
  this.nbAnimaux=this.listFiches.length;
this._ficheAnimalService.searchByEtat('adopté').subscribe((data)=> {
  this.listAdopte=data['hydra:member'];
  this.nbadopte=this.listAdopte.length;
  this.adopte=document.getElementById('adopte');
  this.adopte.style.width=(this.nbadopte/this.nbAnimaux)*100+"%";
});
});

this._ficheAnimalService.getFicheAnimal().subscribe((data) => {
  this.listFiches = data['hydra:member'];
  this.nbAnimaux=this.listFiches.length;
this._ficheAnimalService.searchByEtat('à adopter').subscribe((data)=> {
  this.listAadopter=data['hydra:member'];
  this.nbaadopter=this.listAadopter.length;
  this.aadopter=document.getElementById('aadopter');
  this.aadopter.style.width=(this.nbaadopter/this.nbAnimaux)*100+"%";
});
});
      this.uploadForm = this.formbuilder.group({
        image: ['']
      });
      this._refugeService.getRefuge().subscribe((data) => 
      {this.listRefuges = data['hydra:member'];
        });
  }

  open(content) {
    console.log('hello');
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
//  createFiche()
 // {
  //  console.log(this.addForm.value);
  //  this._ficheAnimalService.addFicheAnimal(this.addForm.value).subscribe((result)=>{
   //   console.log("Get data from service",result)
   //   this._router.navigate(['./fiche-animal']);
   // })
 // } //      formData.append('upload_preset', 'ed3vcfxh');

 createFiche(){
  this.addForm.value.image= this.urlImageCloud;
  console.log(this.addForm.value);

  this._ficheAnimalService.addFicheAnimal(this.addForm.value).subscribe(()=>{
console.log(this.addForm.value);
  });
 }

  onFileSelected(event) {

    const file:File = event.target.files[0];
    if (file) {
      let formData = new FormData();

      console.log(this.uploadForm.get('image').value+"abc");
//check if the filecount is greater than zero, to be sure a file was selected.
      formData.append('upload_preset', 'vqr5bqxp');
      formData.append('file', file);
      this._ficheAnimalService.uploadImageService(formData).subscribe((result)=>{
        console.log(result,"updated successfully");
        this.urlImageCloud = result["url"];
        this.alertUpload=true;
      });
    }
  }

createAdoption(id){
  console.log("user id",this.userId);
  this.addAdoption = new FormGroup({
    animal: new FormControl('/api/fiche_animals/'+id),
    user: new FormControl('/api/users/'+this.userId)
  });
  console.log(id);
  this._ficheAnimalService.getFicheAnimalById(id).subscribe(data=> {
    this.updateForm = new FormGroup({
      nom: new FormControl(data['nom']),
      age: new FormControl(data['age']),
      espece: new FormControl(data['espece']),
      race: new FormControl(data['race']),
      couleur: new FormControl(data['couleur']),
      etat: new FormControl('adopté'),
      sexe: new FormControl(data['sexe']),
      refuge: new FormControl(data['refuge'])

    });    })
    this._ficheAnimalService.updateFicheAnimal(id,this.updateForm.value).subscribe((data)=>{
      console.log(data,"updated")
    })
  console.log(this.addAdoption.value);
  this._adoptionService.addAdoption(this.addAdoption.value).subscribe((result)=>{
    console.log("Get data from service",result)
    this._router.navigate(['./adoption']);
  })
}
recherche(){
  console.log(this.searchForm.value);
  this.rech=this.searchForm.value.recherche;
  this.critere=this.searchForm.value.critere;
  if(this.critere == 'age')
  {this._router.navigate(['./fiche-animal/search-by-age/'+this.rech]);}
  else if(this.critere == 'espece')
  {this._router.navigate(['./fiche-animal/search-by-espece/'+this.rech]);}
  else if(this.critere == 'race')
  {this._router.navigate(['./fiche-animal/search-by-race/'+this.rech]);}
  else if(this.critere == 'etat')
  {this._router.navigate(['./fiche-animal/search-by-etat/'+this.rech]);}
}
}