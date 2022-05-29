import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/environments/environment';
import { Adoption } from '../model/adoption';
import { FicheAnimal } from '../model/fiche-animal.';
import { User } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class AdoptionService {

  constructor(private http: HttpClient) { }
  getAdoption(){
    return this.http.get<Adoption>(apiUrl+'adoptions');
    }
    addAdoption(adoption){
      return this.http.post(apiUrl+'adoptions', adoption);
    }
    getAdoptionById(adoptionId){
      return this.http.get<Adoption>(apiUrl+'adoptions/'+adoptionId);
      }
      updateAdoption(adoptionId,data){
        return this.http.put<Adoption>(apiUrl+'adoptions/'+adoptionId,data);
        }
        deleteAdoption(adoptionId){
          return this.http.delete<Adoption>(apiUrl+'adoptions/'+adoptionId);
          }
          getUser(){
            return this.http.get<User>(apiUrl+'users');
          }
            getAnimal(){
              return this.http.get<FicheAnimal>(apiUrl+'fiche_animals');

              }
              getFicheAnimalById(ficheId){
                return this.http.get<FicheAnimal>(apiUrl+'fiche_animals/'+ficheId);
                }
                getUserById(userId){
                  return this.http.get<User>(apiUrl+'users/'+userId);
                  }
                  getAdoptionByUser(adoption,userId){
                  return this.http.get<User>(apiUrl+'adoptions/?user='+userId);
                  }
                  getAdoptionByAnimal(adoption,animalId){
                    return this.http.get<User>(apiUrl+'adoptions/?animal='+animalId);
                    }
}
