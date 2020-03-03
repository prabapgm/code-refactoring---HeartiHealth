import { Component, OnDestroy } from '@angular/core';
import { TrafficList, TrafficListData } from '../../../@core/data/traffic-list';
import { TrafficBarData, TrafficBar } from '../../../@core/data/traffic-bar';
import { takeWhile } from 'rxjs/operators';
import { TrafficListService } from '../../../@core/mock/traffic-list.service';
import { TotalPrediction } from '../../../@core/data/totalPrediction'
import { TotalPredictionMapper } from '../../../@core/data/totalPredictionMapper'


@Component({
  selector: 'ngx-traffic-reveal-card',
  styleUrls: ['./traffic-reveal-card.component.scss'],
  templateUrl: './traffic-reveal-card.component.html',
})
export class TrafficRevealCardComponent implements OnDestroy {

  private alive = true;

  trafficBarData: TrafficBar;
  trafficListData: TotalPrediction[]=[];
//  trafficListData: TrafficList;
  revealed = false;
  period: string = 'week';

  constructor(private trafficListService: TrafficListData,
              private trafficBarService: TrafficBarData,
              private TrafficListDataService : TrafficListService) {
    this.getTrafficFrontCardData(this.period);
    this.getTrafficBackCardData(this.period);
  }

  toggleView() {
    this.revealed = !this.revealed;
  }

  setPeriodAngGetData(value: string): void {
    this.period = value;

    this.getTrafficFrontCardData(value);
    this.getTrafficBackCardData(value);
  }

  getTrafficBackCardData(period: string) {
    this.trafficBarService.getTrafficBarData(period)
      .pipe(takeWhile(() => this.alive ))
      .subscribe(trafficBarData => {
        this.trafficBarData = trafficBarData;
      });
  }

  getTrafficFrontCardData(period: string) {
    this.TrafficListDataService.getDataForTodalPrediction(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(res => {
        this.trafficListData = this.MapTotalPrediction(res, period);
      });
  }

  MapTotalPrediction(res : TotalPredictionMapper[],period: string) : TotalPrediction[]
  {  
   var tdata :TotalPrediction[]=[];
    for(let i=res.length-1;i>=0;i--)
    {  
      
    

      if(period!='year')
      {
        var interval= res[i].interval.slice(0,3);  
        var prevValue=100;
        if (i==0 && period=='month' && res.length==13)
        {
          break;
        }
        if(i==0)
        {
          var prevDate=res[res.length-1].interval.slice(0,3);   
        
         // var prevValue=100;//(res[i].totalPrediction*100)/(100+res[i].variation);         
        }
           else{
            var prevDate=res[i-1].interval.slice(0,3);     
           // var prevValue=res[i-1].totalPrediction;   
           }
          
      }
      else if(period='year')
      {
        var interval= res[i].interval;
        var prevValue=100;
        if(i==0)
        {
          var prevDate=res[i].interval;
         // prevValue=0;
         // var prevValue=res[i].totalPrediction;         
        }
           else{
            var prevDate=res[i-1].interval;
           // var prevValue=res[i-1].totalPrediction;   
           }

      }

        var a={
          date: interval,
          value: res[i].totalPrediction,
          delta: {
            up:res[i].up,
            value: (res[i].variation>=0 ? res[i].variation : (-1)*res[i].variation) 
          },
          comparison:{
            nextDate:interval,
            nextValue: res[i].variation>=50?((prevValue+100 )/2): prevValue+res[i].variation,//res[i].totalPrediction,
            prevDate:prevDate,
            prevValue: res[i].variation>=50?(prevValue/2): prevValue
  
          }
        }     
        
      
      tdata.push(a);  
      
     }
    
     return this.trafficListData=tdata;
  }


  ngOnDestroy() {
    this.alive = false;
  }
}
