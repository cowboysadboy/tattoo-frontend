import { Component } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-menu',
  templateUrl: './general-menu.component.html',
  styleUrls: ['./general-menu.component.scss'],
})
export class GeneralMenuComponent {
  constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) {}
  logOut() {
    this.localStorage.clear('user');
    this.localStorage.clear('token');
    this.router.navigate([`auth`]);
  }
}
