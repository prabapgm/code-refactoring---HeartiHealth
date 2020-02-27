import { Component } from '@angular/core';
import { ProfitBarAnimationChartData } from '../../../../@core/data/profit-bar-animation-chart';
import { takeWhile } from 'rxjs/operators';
import { ProfitBarAnimationChartService } from '../../../../@core/mock/profit-bar-animation-chart.service'
import { HeartAttackCounter } from '../../../../@core/data/heart-attack-counter';
import { Observable, from } from 'rxjs';
 

@Component({
  selector: "ngx-stats-card-front",
  styleUrls: ["./stats-card-front.component.scss"],
  templateUrl: "./stats-card-front.component.html"
})
export class StatsCardFrontComponent {
  private alive = true;

  linesData: { firstLine: number[]; secondLine: number[] } = {
    firstLine: [],
    secondLine: [],
  }; 
 
  constructor(private ProfitBarAnimationChartData: ProfitBarAnimationChartData,private ProfitBarAnimationChartService: ProfitBarAnimationChartService ) {   
         this.ProfitBarAnimationChartService.getDataForHeartAttackCounter()
         .pipe(takeWhile(() => this.alive))
         .subscribe((res)=>
         {          
            this.linesData = this.getDataForLine(res);  
         });           
  }
  
  public getDataForLine(HeartAttackCounter: HeartAttackCounter[]) {  
    for (let i = 0; i < HeartAttackCounter.length; i++) {  
      this.linesData.firstLine.push(HeartAttackCounter[i].predicted);
      this.linesData.secondLine.push(HeartAttackCounter[i].cured);
    }    
   return this.linesData;    
  }
}
