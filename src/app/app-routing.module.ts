import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component'
import { TransferComponent } from './components/transfer/transfer.component'
import { AboutComponent } from './components/pages/about/about.component'
import { HistoryComponent } from './components/history/history.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'transfer', component: TransferComponent, canActivate: [AuthGuard] },
  { path: 'history', component: HistoryComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
