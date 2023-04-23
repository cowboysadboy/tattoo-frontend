import { Component } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  user = '';
  constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.user = this.localStorage.retrieve('user');
    if (!this.localStorage.retrieve('user')) {
      this.router.navigate(['auth']);
    }
  }
}
