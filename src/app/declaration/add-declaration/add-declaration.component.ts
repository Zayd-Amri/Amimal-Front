import { Component, OnInit,ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { DeclarationService } from '../declaration.service';
//import { HttpClient,HttpResponse} from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import {Cloudinary, CloudinaryFile, CloudinaryImage} from '@cloudinary/base';
import {fill} from '@cloudinary/base/actions/resize';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-add-declaration',
  templateUrl: './add-declaration.component.html',
  styleUrls: ['./add-declaration.component.scss']
})
export class AddDeclarationComponent implements OnInit {
  alert:boolean=false;
  alertUpload:boolean=false;
  urlImageCloud:string="";
  public collection:any;
  public govValue:any;
  uploadForm: FormGroup;  
  declaration = new FormGroup({
    titre: new FormControl('',[Validators.required]),
    description: new FormControl(''),
    gouvernorat: new FormControl('',[Validators.required]),
    latitude: new FormControl(''),
    longitude : new FormControl(''),
    type :new FormControl('',[Validators.required]),
    image: new FormControl('')
    
  });
  constructor(
    private declarationService:DeclarationService,
    private _sharedService: SharedService,
    public matDialogRef:MatDialogRef<AddDeclarationComponent>,
    //private http:HttpClient,
    private el:ElementRef,
    private formbuilder:FormBuilder
    ) { }

  ngOnInit(): void {
    this.uploadForm = this.formbuilder.group({
      image: ['']
    });
    
    this.declarationService.getGouvernorat().subscribe(result=>{
      this.collection=result;
      this.govValue=Object.keys(this.collection);
    });
    
  }
  
  createDeclaration(){
    this.declaration.patchValue({
      image: this.urlImageCloud, 
    });

    console.log(this.declaration.value);
    this.declarationService.addDeclaration(this.declaration.value).subscribe((result)=>{
      this.alert=true;
      this.declaration.reset({})
      console.log("get data from service",result);
      this.onClose();
    })
  }
    onLocation()
       {
              if(!navigator.geolocation)
              {
                console.log('location is not supported');
              }
              navigator.geolocation.getCurrentPosition((position)=>
              {
                console.log(`lat: ${position.coords.latitude},long: ${position.coords.longitude}`);
                
                this.declaration.patchValue({
                  latitude: `${position.coords.latitude}`, 
                  longitude: `${position.coords.longitude}`
                });
              });

  }

  closeAlert(){
    this.alert=false;
    this.alertUpload=false;
  }



  onClose()
  {
    this.matDialogRef.close();
  }

  onFileSelected(event) {

    const file:File = event.target.files[0];
    if (file) {
   let formData = new FormData();

    console.log(this.uploadForm.get('image').value+"abc");
//check if the filecount is greater than zero, to be sure a file was selected.
formData.append('upload_preset', 'bx6gow1n');
formData.append('file', file);
this._sharedService.uploadImageService(formData).subscribe((result)=>{
  console.log(result,"updated successfully");
  this.urlImageCloud = result["url"];
  this.alertUpload=true;
});
}
  }


}


