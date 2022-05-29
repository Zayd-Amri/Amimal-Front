import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-declaration-by-date',
  templateUrl: './show-declaration-by-date.component.html',
  styleUrls: ['./show-declaration-by-date.component.scss']
})
export class ShowDeclarationByDateComponent implements OnInit {

  declarationByDate ='';

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data=>
      {
        this.declarationByDate=data.date;
      });
  
  }

}
