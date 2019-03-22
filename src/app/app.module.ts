import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { TransferComponent } from './components/transfer/transfer.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    HeaderComponent,
    TransferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
