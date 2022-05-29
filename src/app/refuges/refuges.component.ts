import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, PatternValidator, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth/auth.service';
import { Refuge } from '../model/refuge.model';
import { RefugeService } from './refuge.service';

@Component({
  selector: 'app-refuges',
  templateUrl: './refuges.component.html',
  styleUrls: ['./refuges.component.scss']
})
export class RefugesComponent implements OnInit {
  listRefuges; 
  searchForm = new FormGroup({
    critere: new FormControl(''),
    recherche: new FormControl('')
  });
  addForm = new FormGroup({
    ville: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+')]),
    pays: new FormControl('',[Validators.required]),
    telephone: new FormControl('',[Validators.required, Validators.pattern('[0-9]+')]),
    latitude: new FormControl('',[Validators.required, Validators.pattern('[0-9]+.[0-9]+')]),
    longitude: new FormControl('',[Validators.required, Validators.pattern('[0-9]+.[0-9]+')])
  }); 
addComment = new FormGroup({
    user: new FormControl(''),
    refuge: new FormControl(''),
    contenu: new FormControl('')
  });
  rech;
  critere;
  lat;
  long;
  closeResult:string;
  updateForm:FormGroup;
  likestatus:boolean=false;
  rId;
  listCommentaires;
  map;
  x:boolean;
  refugeArray:number[]=[];
  maxLike:number;
  refugePays;
  refugeVille;
  refugeMax;
  refugeMin;
  minLike:number;
  userDetail;
  role;
  constructor(private _refugeService : RefugeService,
              private _authService: AuthService,
              private route: ActivatedRoute,
              private _router: Router ,
               private modalService: NgbModal) { }

  ngOnInit(): void {
    this._authService.user$.subscribe((data)=>{
      this.userDetail=data;
      this.role=this.userDetail.roles[0];
    })
    this._refugeService.getRefuge().subscribe((data) => 
    {this.listRefuges = data['hydra:member'];
    for (let refuge of this.listRefuges) {
      this.refugeArray.push(refuge.nbreLike);
      console.log(this.refugeArray);
    }
    this.maxLike=Math.max.apply(null,this.refugeArray);
    console.log("max:",this.maxLike);
    this._refugeService.searchByLikes(this.maxLike).subscribe((res)=>{
      this.refugeMax=res['hydra:member'][0];
    })


    this.minLike=Math.min.apply(null,this.refugeArray);
    console.log("min:",this.minLike);
    this._refugeService.searchByLikes(this.minLike).subscribe((res)=>{
      this.refugeMin=res['hydra:member'][0];
    })
  });
  }

  onLike(rId){
      console.log("hello");
      this._refugeService.getRefugeById(rId).subscribe(data=> {
      this.updateForm = new FormGroup({
        ville: new FormControl(data['ville']),
        pays: new FormControl(data['pays']),
        telephone: new FormControl(data['telephone']),
        latitude: new FormControl(data['latitude']),
        longitude: new FormControl(data['longitude']),
        nbreLike: new FormControl(data['nbreLike']+1)
      });     })
      this._refugeService.updateRefuge(rId,this.updateForm.value).subscribe((data)=>{
        console.log(data,"updated");
        console.log(this.updateForm.value.nbreLike);
      })
      this.x=true;

  }
  recherche(){
    console.log(this.searchForm.value);
    this.rech=this.searchForm.value.recherche;
    this.critere=this.searchForm.value.critere;
    if(this.critere == 'ville')
    {this._router.navigate(['./refuges/search-by-ville/'+this.rech]);}
    else if(this.critere == 'pays')
    {this._router.navigate(['./refuges/search-by-pays/'+this.rech]);}
  }
  createRefuge()
  {
    console.log(this.addForm.value);
    this.addForm.value.nbreLike=0;
    this._refugeService.addRefuge(this.addForm.value).subscribe();
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
}