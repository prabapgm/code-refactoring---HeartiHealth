import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-Dashboard_graph',
  templateUrl: './Dashboard_graph.component.html',
})
export class Dashboard_graphComponent {
  constructor(private router: Router){
    // const isUserLoggedIn = JSON.parse(localStorage.getItem('isUserLoggedIn'));

    // if(!isUserLoggedIn){
    //   router.navigateByUrl('/login');
    // }
  }
}
