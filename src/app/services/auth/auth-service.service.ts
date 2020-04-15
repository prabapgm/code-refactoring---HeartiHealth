import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {

  //authURL = 'http://ec2-52-201-229-245.compute-1.amazonaws.com:3000/api/User/';


   authURL = 'http://172.30.11.193:3000/api/User/';
  

  constructor(private httpClient: HttpClient, private apiService: ApiService, private router: Router) { }

  userData: any;

  login(userData){     
     //return this.apiService.get(this.authURL + userData.email);          
    return of({email:'testuser@example.com',password:'12345'});          
  }


//   login(username, password) {
//     return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
//         .pipe(map(user => {
//             // store user details and jwt token in local storage to keep user logged in between page refreshes
//             localStorage.setItem('currentUser', JSON.stringify(user));
//             this.currentUserSubject.next(user);
//             return user;
//         }));
// }


  register(userData){
    return this.apiService.post('http://ec2-52-201-229-245.compute-1.amazonaws.com:3000/api/User/', userData, null);
  }

  logout(){
    localStorage.setItem('isUserLoggedIn', 'false');
    this.router.navigateByUrl('/login');
    return true;

  }

  checkIfLoggedIn(userId){
    const userData =  this.httpClient.get('http://ec2-52-201-229-245.compute-1.amazonaws.com:3000/api/User/' + userId)

    this.apiService.get(this.authURL + userId).subscribe((response: any) => {
      return response.isLoggedIn;
    });
  }

}
