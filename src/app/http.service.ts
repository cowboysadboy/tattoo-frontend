import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  getUsers(): Observable<any> {
    return this.http.get<any>('https://reqres.in/api/users?page');
  }
}
