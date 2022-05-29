import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RefugeService } from '../refuge.service';

@Component({
  selector: 'app-delete-refuge',
  templateUrl: './delete-refuge.component.html',
  styleUrls: ['./delete-refuge.component.scss']
})
export class DeleteRefugeComponent implements OnInit {
  refugeId: any;
  data: any;
constructor(private route: ActivatedRoute,
   private _refugeService: RefugeService,
    private _router: Router) { }

  ngOnInit(): void {
    this.refugeId=this.route.snapshot.params['id'];
    this._refugeService.deleteRefuge(this.refugeId).subscribe((data)=>{
      this.data=data;
      console.log("deleted",data);
      this._router.navigate(['./refuges']);
    })
  }

}