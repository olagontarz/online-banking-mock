import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component'
import { TransferComponent } from './components/transfer/transfer.component'
import { AboutComponent } from './components/pages/about/about.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'transfer', component: TransferComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
