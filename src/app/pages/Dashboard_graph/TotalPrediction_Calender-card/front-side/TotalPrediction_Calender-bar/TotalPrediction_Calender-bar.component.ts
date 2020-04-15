import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-TotalPrediction_Calender-bar',
  styleUrls: ['./TotalPrediction_Calender-bar.component.scss'],
  templateUrl: './TotalPrediction_Calender-bar.component.html',
})
export class TotalPrediction_CalenderBarComponent {

  @Input() barData: { prevDate: string; prevValue: number; nextDate: string; nextValue: number };
  @Input() successDelta: boolean;
}
