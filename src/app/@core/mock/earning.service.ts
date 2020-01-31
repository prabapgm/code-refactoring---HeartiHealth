import { Injectable, OnInit } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { LiveUpdateChart, PieChart, EarningData } from '../data/earning';
import { LivePrediction } from '../data/live-prediction';
import { HttpClient } from '@angular/common/http';
import * as LivePredictions from '../../../assets/mock/livePrediction.json'

@Injectable()

export class EarningService  implements OnInit{
//export class EarningService extends EarningData {


  
  private LivePredictions: LivePrediction[];


  constructor(private http: HttpClient) {

    
  }
  ngOnInit() {

  }


  GetLiveRecords():Observable<LivePrediction[]>
  {
  //return observableOf((LivePredictions as any).default);
  
  return this.http.get<LivePrediction[]>("http://172.30.12.171:8083/api/livePredictions/");
  }

}