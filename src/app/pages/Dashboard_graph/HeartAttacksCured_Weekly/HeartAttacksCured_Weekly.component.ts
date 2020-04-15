import { Component } from '@angular/core';


@Component({
  selector: 'ngx-HeartAttacksCured_Weekly',
  styleUrls: ['./HeartAttacksCured_Weekly.component.scss'],
  templateUrl: './HeartAttacksCured_Weekly.component.html',
})
export class HeartAttacksCured_WeeklyComponent {

  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }
}
