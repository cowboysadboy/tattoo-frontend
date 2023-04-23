import { Component } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';
import { clearNickname, setNickname } from '../app.actions';
import { selectNickname } from '../app.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'tattoo';
  token = '';
  nickname: any = this.store.pipe(select(selectNickname));

  constructor(
    private localStorage: LocalStorageService,
    private store: Store<AppState>
  ) {}
  ngOnInit(): void {
    this.token = this.localStorage.retrieve('token');
    console.log(this.nickname.actionsObserver._value.nickname);
  }

  setNickname() {
    this.store.dispatch(setNickname({ nickname: 'John Doe' }));
  }


  clearNickname() {
    this.store.dispatch(clearNickname());
  }
}
