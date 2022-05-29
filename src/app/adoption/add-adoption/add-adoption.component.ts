import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdoptionService } from '../adoption.service';

@Component({
  selector: 'app-add-adoption',
  templateUrl: './add-adoption.component.html',
  styleUrls: ['./add-adoption.component.scss']
})
export class AddAdoptionComponent implements OnInit {
  closeResult: string;
  now : Date = new Date();
  listAnimals;
  listUsers;
  addForm = new FormGroup({
    user: new FormControl(''),
    animal: new FormControl(''),
    dateAdoption: new FormControl(this.now, [])

  });
  constructor(private _adoptionService: AdoptionService, private _router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this._adoptionService.getAnimal().subscribe((data)=> 
    {this.listAnimals=data['hydra:member'];
      console.log(this.listAnimals);
    })

    this._adoptionService.getUser().subscribe((data)=> 
    {this.listUsers=data['hydra:member'];
      console.log(this.listUsers);
    })
    
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
