import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/environments/environment';
import { Refuge } from '../model/refuge.model';
import { Commentaire } from '../model/commentaire.model';

@Injectable({
  providedIn: 'root'
})
export class RefugeService {

  constructor(private http: HttpClient) { }

  getRefuge() : Observable<Refuge>{
    return this.http.get<Refuge>(apiUrl+'refuges');
  }

  addRefuge(refuge :Refuge) : Observable<Refuge>{
    return this.http.post<Refuge>(apiUrl+'refuges', refuge);
  }

  updateRefuge(refugeId,data){
    return this.http.put<Refuge>(apiUrl+'refuges/'+refugeId,data);
  }

  deleteRefuge(refugeId) : Observable<Refuge>{
    const refugeUrl = apiUrl + 'refuges/' + refugeId;
    return this.http.delete<Refuge>(refugeUrl);
  }
  getRefugeById(refugeId){
    return this.http.get<Refuge>(apiUrl+'refuges/'+refugeId);
  }
  searchByVille(ville){
      return this.http.get<Refuge>(apiUrl+'refuges?ville='+ville);
  }
  searchByPays(pays){
        return this.http.get<Refuge>(apiUrl+'refuges?pays='+pays);
  }
  searchByLikes(likes){
    return this.http.get<Refuge>(apiUrl+'refuges?nbreLike='+likes);
}
  addCommentaire(commentaire :Commentaire) : Observable<Commentaire>{
          return this.http.post<Commentaire>(apiUrl+'commentaire_refuges', commentaire);
  }
  getCommentaireByRefuge(refugeId){
    return this.http.get<Commentaire>(apiUrl+'commentaire_refuges?refuge='+refugeId);
  }
  getCommentaireByUser(userId){
    return this.http.get<Commentaire>(apiUrl+'commentaire_refuges?user='+userId);
  }
  getCommentaireById(commentaireId){
    return this.http.get<Commentaire>(apiUrl+'commentaire_refuges/'+commentaireId);
  }
  updateCommentaire(commentaireId,data){
    return this.http.put<Commentaire>(apiUrl+'commentaire_refuges/'+commentaireId,data);
  }

  deleteCommentaire(commentaireId) : Observable<Commentaire>{
    return this.http.delete<Commentaire>(apiUrl+'commentaire_refuges/'+commentaireId);
  }
}
