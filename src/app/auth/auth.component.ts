import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  email = '';
  password = '';
  userToken: any;
  token = '';
  constructor(
    private localStorage: LocalStorageService,
    private authService: AuthServiceService,
    private router: Router,
  ) {}
  onSubmit() {
    this.authService.authUser(this.email, this.password).subscribe(
      (res) => {
        this.userToken = res;
        this.token = this.userToken?.token;
        console.log(this.token);

        this.localStorage.store('token', this.token);
        this.localStorage.store('user', this.userToken?.id);
        this.router.navigate(['']);
      },
      (err) => console.log(err)
    );
  }
}
