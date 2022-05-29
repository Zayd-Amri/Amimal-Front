import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RefugeService } from '../refuge.service';

@Component({
  selector: 'app-delete-commentaire',
  templateUrl: './delete-commentaire.component.html',
  styleUrls: ['./delete-commentaire.component.scss']
})
export class DeleteCommentaireComponent implements OnInit {
  commentId;
  data;
  constructor(private route: ActivatedRoute,
    private _refugeService: RefugeService,
     private _router: Router) { }

  ngOnInit(): void {
    this.commentId=this.route.snapshot.params['id'];
    this._refugeService.deleteCommentaire(this.commentId).subscribe((data)=>{
      this.data=data;
      console.log("deleted",data);
      this._router.navigate(['./refuges']);
    })
  }

}
