import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/environments/environment';
import { Don } from '../model/don.model';

@Injectable({
  providedIn: 'root'
})
export class DonsService {

  constructor(private http: HttpClient) { }

  getDon() : Observable<Don>{
    return this.http.get<Don>(apiUrl+'dons');
  }

  addDon(don : Don) : Observable<Don>{
    return this.http.post<Don>(apiUrl+'dons', don);
  }

  updateDon(don, donId) : Observable<Don>{
    const donUrl = apiUrl + 'dons' + donId;
    return this.http.put<Don>(donUrl , don);
  }

  viewDon(donId) : Observable<Don>{
    const donUrl = apiUrl + 'dons/' + donId;
    return this.http.get<Don>(donUrl);
  }

  viewDonByUser(don, userId) : Observable<Don>{
    const donUrl = apiUrl + 'dons/?user=' + userId;
    return this.http.get<Don>(donUrl);
  }

  deleteDon(donId) : Observable<Don>{
    const donUrl = apiUrl + 'dons/' + donId;
    return this.http.delete<Don>(donUrl);
}

}