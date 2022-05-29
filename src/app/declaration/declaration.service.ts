import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpBackend } from '@angular/common/http';
import { Declaration } from './declaration';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { apiUrl } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DeclarationService {
  private httpClientExtern: HttpClient;


  constructor(private httpclient:HttpClient,private httpBackend:HttpBackend) {
    this.httpClientExtern=  new HttpClient(this.httpBackend);
  }

    addDeclaration(declarationBody):Observable<Declaration>
    {
      const declarationURL= apiUrl + "declarations";
      return this.httpclient.post<Declaration>(declarationURL,declarationBody);
    }
   
   
    getOneDeclaration(declarationId)
    {
      const declarationURL= apiUrl + "declarations/"+declarationId;
      return this.httpclient.get (declarationURL,declarationId);
    }
    getGouvernorat(){
      const govURL="https://raw.githubusercontent.com/marwein/tunisia/master/tunisia.json";
      return this.httpClientExtern.get(govURL);
    }

    getDeclarations():Observable <Declaration>
    {
      const declarationURL= apiUrl + "declarations";
      return this.httpclient.get<Declaration>(declarationURL);
    }
    getDeclarationByDate(date)
    {
      const declarationURL= apiUrl + "declarations/show-declaration-by-date?date="+date;
      return this.httpclient.get<Declaration>(declarationURL);
    }
    deleteDeclaration(declarationId)
    {
      const declarationURL= apiUrl + "declarations/show-oneDeclaration/"+declarationId;
      return this.httpclient.delete<Declaration>(declarationURL,declarationId);
    }
    updateDeclaration(declarationId,declarationBody):Observable<Declaration>
    {
      const declarationURL= apiUrl + "declarations/"+declarationId;
      return this.httpclient.put<Declaration>(declarationURL,declarationBody);
    }


    
}
