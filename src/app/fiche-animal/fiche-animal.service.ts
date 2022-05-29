import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/environments/environment';
import { FicheAnimal } from '../model/fiche-animal.';
import { User } from '../model/user.model';
const URLcloud = 'https://api.cloudinary.com/v1_1/dasuhhfqf/image/upload';

@Injectable({
  providedIn: 'root'
})
export class FicheAnimalService {

  constructor(private http: HttpClient) {   }
  getFicheAnimal(){
  return this.http.get<FicheAnimal>(apiUrl+'fiche_animals');
  }
  addFicheAnimal(ficheAnimal){
    return this.http.post(apiUrl+'fiche_animals', ficheAnimal);
  }
  getFicheAnimalById(ficheId){
    return this.http.get<FicheAnimal>(apiUrl+'fiche_animals/'+ficheId);
    }
    updateFicheAnimal(ficheId,data){
      return this.http.put<FicheAnimal>(apiUrl+'fiche_animals/'+ficheId,data);
      }
      deleteFicheAnimal(ficheId){
        return this.http.delete<FicheAnimal>(apiUrl+'fiche_animals/'+ficheId);
        }
        searchByEtat(etat){
          return this.http.get<FicheAnimal>(apiUrl+'fiche_animals?etat='+etat);
          }
          searchByEspece(espece){
            return this.http.get<FicheAnimal>(apiUrl+'fiche_animals?espece='+espece);
            }
            searchByRace(race){
              return this.http.get<FicheAnimal>(apiUrl+'fiche_animals?race='+race);
              }
              searchByAge(age){
                return this.http.get<FicheAnimal>(apiUrl+'fiche_animals?age='+age);
                }
                searchByRefuge(refugeId){
                  return this.http.get<FicheAnimal>(apiUrl+'fiche_animals?refuge='+refugeId);
                  }
                uploadImageService(imageBody)
                {
                  return this.http.post<FicheAnimal>(URLcloud,imageBody);
                }
                getUserByEmail(email){
                  return this.http.get<User>(apiUrl+'users?email='+email);
                }
}
