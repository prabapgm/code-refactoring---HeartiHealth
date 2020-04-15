import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { interval , Subscription } from 'rxjs';
import { switchMap, takeWhile } from 'rxjs/operators';
import { LiveUpdateChart, EarningData } from '../../../@core/data/earning';
import { LivePrediction } from '../../../@core/data/live-prediction';
import { symptomPrediction } from '../../../@core/data/symptomPrediction';
import { SymptomPredictonMapper } from '../../../@core/data/symptomPredictionMapper';
import { TodaysPredictionService } from '../../../@core/mock/TodaysPrediction.service';

@Component({
  selector: 'ngx-TodaysPrediction-front',
  styleUrls: ['./TodaysPrediction-front.component.scss'],
  templateUrl: './TodaysPrediction-front.component.html',
})
export class TodaysPredictionFrontComponent implements OnDestroy, OnInit {
  private alive = true;

  @Input() selectedCurrency: string = 'Chest Pain';

  intervalSubscription: Subscription;
  currencies: string[] = ['Chest Pain', 'Blood Pressure', 'Cholesterol'];
  currentTheme: string;
  predictionLiveUpdateCardData: LivePrediction;
  liveUpdateChartData: SymptomPredictonMapper[] = [];

  constructor(private themeService: NbThemeService,
              private earningService: EarningData,
              private earningDataService : TodaysPredictionService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });
  }

  ngOnInit() {
    this.getEarningCardData(this.selectedCurrency);
    this.startReceivingLiveData(this.selectedCurrency);
  }

  changeCurrency(currency) {
    if (this.selectedCurrency !== currency) {
      this.selectedCurrency = currency;
     this. getEarningCardData(currency);
    }
  }


  private getEarningCardData(currency) {

       this.earningDataService.GetLiveRecords()
      .pipe(takeWhile(() => this.alive))
      .subscribe((res) => {
        this.predictionLiveUpdateCardData = res.filter
        ((value) => value.symptomType.toLowerCase().includes(currency.toLowerCase()))[0];
      this.mapSymptomPredictionMapper(this.predictionLiveUpdateCardData.symptomPrediction);


      });

  }

   private mapSymptomPredictionMapper(symptomPredictions :symptomPrediction[])
   {
   var tdata:SymptomPredictonMapper[]=[];
    for(let i = 0; i < symptomPredictions.length;i++)
     {
    tdata.push({value: [symptomPredictions[i].timeStamp,
      symptomPredictions[i].symptomValue]});
    }
  this.liveUpdateChartData = tdata;
  }

  startReceivingLiveData(currency) {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }

    this.intervalSubscription = interval(700)
      .pipe(
        takeWhile(() => this.alive)
      )
      .subscribe(() => {
        const tdata: SymptomPredictonMapper[] = Object.assign([], this.liveUpdateChartData);
        for ( let i = 0; i < tdata.length; i++) {
         tdata[i].value[1] = this.liveUpdateChartData[(i + 1) % tdata.length].value[1];
        }
        this.liveUpdateChartData = tdata;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
