import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
  getHome() : Observable<object> {
    //access httpClient
    // import httpClient in app.module.ts
   return this.http.get("http://localhost:8080/")
  }
}
