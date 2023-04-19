import { Component } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tattoo';
  token = '';
  constructor(private localStorage: LocalStorageService) {}
  ngOnInit(): void {
    this.token = this.localStorage.retrieve('token');
  }
  logOut(){
    this.localStorage.clear('token')
  }
}
