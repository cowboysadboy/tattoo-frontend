import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  registerUser(email: string, password: string) {
    return this.http.post('https://reqres.in/api/register', {
      email,
      password,
    });
  }

  authUser(email: string, password: string) {
    return this.http.post('https://reqres.in/api/register', {
      email,
      password,
    });
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users?page=2');
  }
}
