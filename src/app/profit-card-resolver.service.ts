import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { of as observableOf, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HeartAttackCounter } from '../app/@core/data/heart-attack-counter';
import { environment } from '../environments/environment';
import *  as  HeartAttackPredictor from '../assets/mock/heartAttackCounter.json';

@Injectable({
  providedIn: 'root'
})
export class ProfitCardResolverService {

  constructor(private http: HttpClient) { }

  resolve(): Observable<HeartAttackCounter[]> { 
       return this.http.get<HeartAttackCounter[]>(environment.heartiAttackCounterUrl); 
      //return observableOf((HeartAttackPredictor as any).default);  
  } 
}
