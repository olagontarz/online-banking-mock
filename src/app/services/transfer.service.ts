import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { AuthService } from './auth.service'

@Injectable({ providedIn: 'root' })
export class TransferService {
    backend:String = 'https://online-banking-backend.herokuapp.com';
    //backend:String = 'http://localhost:3000';
    
    constructor(private http: HttpClient, private authService: AuthService) { }

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': this.authService.currentUserValue.token
        })
    };

    getHistory(user: string) {
        return this.http.get<any>(`${this.backend}/transfers/${user}`, this.httpOptions);
    }

    send(account: string, name: string, address: string, amount: string) {
        return this.http.post<any>(`${this.backend}/transfers`, { account, name, address, amount }, this.httpOptions);
    }
    
}