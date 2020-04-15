import { Component } from '@angular/core';

@Component({
  selector: 'ngx-TodaysPrediction',
  styleUrls: ['./TodaysPrediction.component.scss'],
  templateUrl: './TodaysPrediction.component.html',
})
export class TodaysPredictionComponent {

  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }
}
