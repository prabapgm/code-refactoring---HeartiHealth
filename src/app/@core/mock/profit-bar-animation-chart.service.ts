import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { of as observableOf, Observable } from 'rxjs';
import { delay } from "rxjs/operators"; 
import { ProfitBarAnimationChartData } from '../data/profit-bar-animation-chart';
import { HeartAttackCounter } from '../data/heart-attack-counter';
import *  as  HeartAttackPredictor from '../../../assets/mock/heartAttackCounter.json';
import{HeaderComponent} from '../../@theme/components/header/header.component';


@Injectable() 

export class ProfitBarAnimationChartService extends ProfitBarAnimationChartData { 

  private HeartAttackCounter: HeartAttackCounter[]=[];
  private data: any;

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {   
  }
  
  createEmptyArray(nPoints: number) {
    return Array.from(Array(nPoints));
  }

  getChartData(): Observable<{ firstLine: number[]; secondLine: number[]; }> {  
    return observableOf(this.data);
  }
}
