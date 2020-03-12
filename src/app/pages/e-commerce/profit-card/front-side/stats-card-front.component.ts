import { Component,OnInit } from '@angular/core';
import { ProfitBarAnimationChartData } from '../../../../@core/data/profit-bar-animation-chart';
import { takeWhile } from 'rxjs/operators'; 
import { HeartAttackCounter } from '../../../../@core/data/heart-attack-counter';
import { Observable, from } from 'rxjs';

import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: "ngx-stats-card-front",
  styleUrls: ["./stats-card-front.component.scss"],
  templateUrl: "./stats-card-front.component.html"
})
export class StatsCardFrontComponent {
  private alive = true;

  private curr = new Date ;
  private days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  public week = [];
  //public week = [10,20,30,40,50,60,70];
  private Week_cnt = 0;

  public linesData: { firstLine: number[]; secondLine: number[] } = {
    firstLine: [],
    secondLine: [],
  }; 

  public getDay_data = [];

  public dashboard :any;
  
  ngOnInit(): void {
    this.dashboard = this.route.snapshot.data['dashboard'];
<<<<<<< HEAD
    //    this.Week_cnt = this.curr.getDate();
    this.Week_cnt = this.curr.getDay()-1;
    //this.week = this.days;
    for (let i = 0; i <= this.dashboard.length; i++) {
=======
    //this.Week_cnt = this.curr.getDate();      

    for (let i = 0; i <= this.dashboard.length; i++) {  
>>>>>>> d416447d7ef87ee18b891f38d80acbc9a3f40173
      this.linesData.firstLine.push(this.dashboard[i].predicted);
      this.linesData.secondLine.push(this.dashboard[i].cured);
      //get x-axis day data
      this.getDay_data.push(this.dashboard[i].interval);
      
      //get current day
      //this.week[i] = this.days[this.Week_cnt];  
      //this.Week_cnt++;
      //(this.Week_cnt == 7) ?  this.Week_cnt = 0 : "";     
    }    
  }
  constructor(private route: ActivatedRoute) {} 
}