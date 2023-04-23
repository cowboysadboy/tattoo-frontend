import { Component } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'App';
  constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) {}
  ngOnInit(): void {
    const token = this.localStorage.retrieve('user');
    if (this.localStorage.retrieve('user')) {
      this.router.navigate(['']);
    } else{
      this.router.navigate([`auth`]);
    }
    
  }
}
