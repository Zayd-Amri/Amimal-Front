import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
import { FicheAnimalService } from '../fiche-animal.service';
@Component({
  selector: 'app-stat-fiche-animal',
  templateUrl: './stat-fiche-animal.component.html',
  styleUrls: ['./stat-fiche-animal.component.scss']
})
export class StatFicheAnimalComponent implements OnInit {
public ctx;
public canvas;
public nbperdu: number;
public nbadopte: number;
public nbaadopter: number;
public nbChien: number;
public nbChat: number;
public nbLapin: number;
listPerdu;
listAdopte;
listAadopter;
listChien;
listChat;
listLapin;
etats;
listAnimals;
nbAnimaux;
  constructor(private _ficheService: FicheAnimalService) { }

  ngOnInit(): void { 
    this._ficheService.searchByEtat('perdu').subscribe((data)=> {
      this.listPerdu=data['hydra:member'];
      this.nbperdu=this.listPerdu.length;
})
this._ficheService.searchByEtat('adopté').subscribe((data)=> {
  this.listAdopte=data['hydra:member'];
  this.nbadopte=this.listAdopte.length;

})
this._ficheService.searchByEtat('à adopter').subscribe((data)=> {
  this.listAadopter=data['hydra:member'];
  this.nbaadopter=this.listAadopter.length;
})
this._ficheService.searchByEspece('chien').subscribe((data)=> {
  this.listChien=data['hydra:member'];
  this.nbChien=this.listChien.length;
   })
   this._ficheService.searchByEspece('chat').subscribe((data)=> {
    this.listChat=data['hydra:member'];
    this.nbChat=this.listChat.length;
     })
     this._ficheService.searchByEspece('lapin').subscribe((data)=> {
      this.listLapin=data['hydra:member'];
      this.nbLapin=this.listLapin.length;
       })
       this._ficheService.getFicheAnimal().subscribe((data)=> {
        this.listAnimals=data['hydra:member'];
        this.nbAnimaux=this.listAnimals.length;
         })  
  }
createPieChart(data1,data2,data3,chartId){
this.canvas= document.getElementById(chartId);
this.ctx = this.canvas.getContext('2d');
let chart = new Chart (this.ctx,{
  type: 'pie',
  data: {
    datasets: [{
        data: [data1,data2,data3],
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
    }],

    
}
  }
)
}

createBarChart(data1,data2,data3,barChartId){
  this.canvas= document.getElementById(barChartId);
  this.ctx = this.canvas.getContext('2d');
  let chart = new Chart (this.ctx,{
    type: 'bar',
    data: {
      datasets: [{
          data: [data1,data2,data3],
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
      }],
  
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
          'Chien',
          'Chat',
          'Lapin'
      ]
      
  }
    }
  )
  }
}
