import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { ProfitBarAnimationChartData } from '../data/profit-bar-animation-chart';
import { HeartAttackCounter } from '../data/heart-attack-counter';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import *  as  HeartAttackPredictor from '../../../assets/mock/heartAttackCounter.json';


@Injectable()
export class ProfitBarAnimationChartService extends ProfitBarAnimationChartData {

  private HeartAttackCounter: HeartAttackCounter[]=[];
  private data: any;

  constructor(private http: HttpClient) {
    super();
    this.getDataForHeartAttackCounter().subscribe(
      res => {
        this.HeartAttackCounter = res;
        this.data = {
          firstLine: this.getDataForFirstLine(),
          secondLine: this.getDataForSecondLine(),
        };
      });    
  }
  ngOnInit() {
   
  }
  getDataForHeartAttackCounter(): Observable<HeartAttackCounter[]> {

  return observableOf((HeartAttackPredictor as any).default); 

   //return this.http.get<HeartAttackCounter[]>("http://172.30.12.171:8083/api/intervalReport/weeklyReport/");
    
  }

  getDataForFirstLine(): number[] {  
    
    let firstLinedata: number[] = [];
    for (let i = 0; i < this.HeartAttackCounter.length; i++) {    
      firstLinedata.push(this.HeartAttackCounter[i].predicted);
    }

    return firstLinedata; 
  }

  getDataForSecondLine(): number[] {
    let secondLinedata: number[] = [];
    for (let i = 0; i < this.HeartAttackCounter.length; i++) {
      
      secondLinedata.push(this.HeartAttackCounter[i].cured);
    }

    return secondLinedata; 
  }

  createEmptyArray(nPoints: number) {
    return Array.from(Array(nPoints));
  }

  getChartData(): Observable<{ firstLine: number[]; secondLine: number[]; }> {
    return observableOf(this.data);
  }
}
