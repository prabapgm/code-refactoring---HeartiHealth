import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HeartAttackCounter } from '../app/@core/data/heart-attack-counter';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfitCardResolverService {

  constructor(private http: HttpClient) { }

  resolve(): Observable<HeartAttackCounter[]> { 
       return this.http.get<HeartAttackCounter[]>(environment.heartiAttackCounterUrl); 
  } 
}
