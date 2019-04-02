import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import {User} from "./user";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: Http) { }
  
   private _postsURL : string = "http://localhost:8080/projects/api/create.php";
 create(user){
	  let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(user);
 return this.http.post(this._postsURL, body, options);
			 }
 getUserById(id: number):Observable<any> {
    return this.http.get('http://localhost:8080/projects/api/employee_detail.php?id=' + id);
  }			 
}
