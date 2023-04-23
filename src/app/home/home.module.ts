import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LeadsComponent } from './leads/leads.component';
import { GeneralMenuComponent } from './general-menu/general-menu.component';
import { AccountComponent } from './account/account.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    HomeComponent,
    GeneralMenuComponent,
    AccountComponent,
    LeadsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: 'leads',
            component: LeadsComponent,
          },
          {
            path: '',
            component: AccountComponent,
          },
        ],
      },
    ]),
  ],
  providers: [],
})
export class HomeModule {}
