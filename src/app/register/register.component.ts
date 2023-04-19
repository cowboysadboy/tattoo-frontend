import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  email = '';
  password = '';
  userToken: any;
  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private localStorage: LocalStorageService
  ) {}
  onSubmit() {
    this.authService.registerUser(this.email, this.password).subscribe(
      (res) => {
        this.userToken = res;
        this.localStorage.store('token', this.userToken?.token);
        console.log(this.userToken?.token);
        // this.router.navigate([`auth`]);
      },
      (err) => console.log(err)
    );
  }
}
