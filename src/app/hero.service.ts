import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
 
 import {Hero} from "./hero";

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private http: Http) { } 
 
  private _postsURL : string = "http://localhost:8080/projects/api/select.php";
 getHeroes():Observable<any>{ return this.http
             .get(this._postsURL);
			 }
  
 }
