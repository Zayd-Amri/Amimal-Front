import { Component, OnInit } from '@angular/core';
import { Don } from '../model/don.model';
import { DonsService } from './dons.service';

@Component({
  selector: 'app-dons',
  templateUrl: './dons.component.html',
  styleUrls: ['./dons.component.scss']
})
export class DonsComponent implements OnInit {

  listDons : Don;

  constructor( private _donSercice: DonsService) { }

  ngOnInit(): void {
    this._donSercice.getDon().subscribe(
      (data) => {this.listDons = data;
      }

    );
  }

}
