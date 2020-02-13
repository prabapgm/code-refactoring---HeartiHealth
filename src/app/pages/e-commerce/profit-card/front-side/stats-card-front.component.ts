import { Component } from '@angular/core';
import { ProfitBarAnimationChartData } from '../../../../@core/data/profit-bar-animation-chart';
import { takeWhile } from 'rxjs/operators';
import { ProfitBarAnimationChartService } from '../../../../@core/mock/profit-bar-animation-chart.service'
import { HeartAttackCounter } from '../../../../@core/data/heart-attack-counter';
import { Observable } from 'rxjs';


@Component({
  selector: 'ngx-stats-card-front',
  styleUrls: ['./stats-card-front.component.scss'],
  templateUrl: './stats-card-front.component.html',
})
export class StatsCardFrontComponent {

  private alive = true;

  
  //linesData: { firstLine: number[]; secondLine: number[] };

  linesData: { firstLine: number[]; secondLine: number[] } = {
    firstLine: [],
    secondLine: [],
  };
  

  constructor(private ProfitBarAnimationChartData: ProfitBarAnimationChartData,private ProfitBarAnimationChartService: ProfitBarAnimationChartService ) {      
    
         this.ProfitBarAnimationChartService.getDataForHeartAttackCounter()
         .pipe(takeWhile(() => this.alive))
         .subscribe((res)=>
         {
          this.linesData=this.getDataForLine(res);          
         });         
  }
  
  public getDataForLine(HeartAttackCounter: HeartAttackCounter[]) {  
  
    /*let data = { firstLine, secondLine};
    data.firstLine = [];
    data.secondLine = [];
    var firstLine: number[]=[];
    var secondLine: number[]=[];*/

    for (let i = 0; i < HeartAttackCounter.length; i++) {

     // firstLine.push(HeartAttackCounter[i].predicted);
      //secondLine.push(HeartAttackCounter[i].cured);

      this.linesData.firstLine.push(HeartAttackCounter[i].predicted);
      this.linesData.secondLine.push(HeartAttackCounter[i].cured);
    }
<<<<<<< HEAD
    data.firstLine = firstLine;
    data.secondLine = secondLine;

    return data;
  }

  public getDataForFirstLine(HeartAttackCounter: HeartAttackCounter[]): number[] {
=======
    
   //this.linesData.firstLine = firstLine;
   //this.linesData.secondLine = secondLine;
   //alert(this.linesData.secondLine +"   :   "+secondLine);
    

   return this.newMethod();
      
    //return data; 
  }


  private newMethod() {    
    return this.linesData;    
  }

  /*
public getDataForFirstLine(HeartAttackCounter: HeartAttackCounter[]):  number[] {  
    
  let firstLinedata: number[] = [];
  for (let i = 0; i < HeartAttackCounter.length; i++) {    
    firstLinedata.push(HeartAttackCounter[i].predicted);
  }


  return firstLinedata; 
}
>>>>>>> 0619071109476323b9e0fce0ea631da81b19dd71

    let firstLinedata: number[] = [];
    for (let i = 0; i < HeartAttackCounter.length; i++) {
      firstLinedata.push(HeartAttackCounter[i].predicted);
    }

    return firstLinedata;
  }

<<<<<<< HEAD
  private getDataForSecondLine(HeartAttackCounter: HeartAttackCounter[]): number[] {
    let secondLinedata: number[] = [];
    for (let i = 0; i < HeartAttackCounter.length; i++) {

      secondLinedata.push(HeartAttackCounter[i].cured);
    }

    return secondLinedata;
  }
=======
  return secondLinedata; 
}   
*/
>>>>>>> 0619071109476323b9e0fce0ea631da81b19dd71

}

