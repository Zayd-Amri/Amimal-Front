import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-declaration',
  templateUrl: './delete-declaration.component.html',
  styleUrls: ['./delete-declaration.component.scss']
})
export class DeleteDeclarationComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }
  declarationId=0
    ngOnInit(): void {
      this.activatedRoute.params.subscribe(data=>{
        this.declarationId=data.id;
      })
    }
}
