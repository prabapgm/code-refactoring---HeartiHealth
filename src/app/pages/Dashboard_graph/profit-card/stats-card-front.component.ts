import { Component,OnInit } from '@angular/core';
import { ProfitBarAnimationChartData } from '../../../@core/data/profit-bar-animation-chart';
import { takeWhile } from 'rxjs/operators'; 
import { HeartAttackCounter } from '../../../@core/data/heart-attack-counter';
import { Observable, from } from 'rxjs';

import { ActivatedRoute } from '@angular/router'; 
import { ProfitBarAnimationChartService } from '../../../@core/mock/profit-bar-animation-chart.service' 


@Component({
  selector: "ngx-stats-card-front",
  styleUrls: ["./stats-card-front.component.scss"],
  templateUrl: "./stats-card-front.component.html"
})
export class StatsCardFrontComponent {
  private alive = true;
  
  public linesData: { firstLine: number[]; secondLine: number[] } = {
    firstLine: [],
    secondLine: [],
  }; 

  public getDay_data = [];

  public dashboard :any;
  
  ngOnInit(): void {
    this.dashboard = this.route.snapshot.data['dashboard'];

    for (let i = 0; i <= this.dashboard.length; i++) {  
      this.linesData.firstLine.push(this.dashboard[i].predicted);
      this.linesData.secondLine.push(this.dashboard[i].cured);
      //get x-axis day data
      this.getDay_data.push(this.dashboard[i].interval);         
    }      
}
  constructor(private route: ActivatedRoute) {} 
}