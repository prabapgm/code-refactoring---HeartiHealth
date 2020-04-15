import { Injectable, OnInit } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { LiveUpdateChart, PieChart, EarningData } from '../data/earning';
import { LivePrediction } from '../data/live-prediction';
import { HttpClient } from '@angular/common/http';
import * as LivePredictions from '../../../assets/mock/livePrediction.json'
import { environment } from '../../../environments/environment'

@Injectable()

export class TodaysPredictionService  implements OnInit{
//export class TodaysPredictionService extends EarningData {


  
  private LivePredictions: LivePrediction[];


  constructor(private http: HttpClient) {

    
  }
  ngOnInit() {

  }


  GetLiveRecords():Observable<LivePrediction[]>
  {
    return observableOf((LivePredictions as any).default);  
    //return this.http.get<LivePrediction[]>(environment.livePredictionUrl);
  }

}
