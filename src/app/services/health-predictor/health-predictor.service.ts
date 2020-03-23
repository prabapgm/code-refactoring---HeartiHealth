import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { pluck } from "rxjs/operators";
import { Observable, of } from "rxjs";
// import { HttpHeaders, HttpParams, HttpEvent, HttpClient } from "@angular/common/http";
// import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HealthPredictorService {

  constructor(private httpClient: HttpClient) { }

  getHeartPredictorResult(data) {
<<<<<<< HEAD
    return of({Result: 1, Status: 200});

    // return this.httpClient.post('http://3.6.13.167:5000/predict/', data);

    
    //return this.httpClient.post('http://localhost:52648/predict/', data);
  }
=======
    // return of({Result: 1, Status: 200});
    return this.httpClient.post("http://3.6.13.167:5000/predict/", data,
    {headers: {'Content-Type': 'application/json'}});
   }
  // return this.httpClient.post("http://127.0.0.1:5000/predict/", data,
  //   {headers: {'Content-Type': 'application/json'}});
  // }
>>>>>>> f24507dc3ace458f64e00f4305d7759896cc20e6

}
