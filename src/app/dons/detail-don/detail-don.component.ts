import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Don } from 'src/app/model/don.model';
import { DonsService } from '../dons.service';

@Component({
  selector: 'app-detail-don',
  templateUrl: './detail-don.component.html',
  styleUrls: ['./detail-don.component.scss']
})
export class DetailDonComponent implements OnInit {

  donId : Don;
  donDetail : Don;

  constructor(private route: ActivatedRoute, private _donSercice: DonsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.donId = data.id;
    });

    this._donSercice.viewDon(this.donId).subscribe(data =>{
      this.donDetail = data;
    });
  }

}
