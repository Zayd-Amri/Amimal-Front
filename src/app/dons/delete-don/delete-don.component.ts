import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Don } from 'src/app/model/don.model';
import { DonsService } from '../dons.service';

@Component({
  selector: 'app-delete-don',
  templateUrl: './delete-don.component.html',
  styleUrls: ['./delete-don.component.scss']
})
export class DeleteDonComponent implements OnInit {

  doneId : Don;

  constructor(private route: ActivatedRoute, private _router: Router, private _donSercice: DonsService) { }

  ngOnInit(): void {

    this.route.params.subscribe(data => {
      this.doneId = data.id;
      this._donSercice.deleteDon(this.doneId).subscribe();
      this._router.navigate(['./dons']);
    })
    
  }

}
