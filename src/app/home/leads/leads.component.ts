import { Component } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss'],
})
export class LeadsComponent {
  users: User[] = [];
  constructor(private httpService: HttpService) {}
  ngOnInit(): void {
    this.httpService.getUsers().subscribe((users) => {
      this.users = users.data;
      console.log(this.users);
    });
  }
}
