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
          'Authorization': this.authService.currentUserValue.user.token
        })
    };

    getHistory(user: string) {
        // console.log("Get transfers history for user")
        return this.http.get<any>(`${this.backend}/transfers/${user}`, this.httpOptions);
    }

    send(account: string, name: string, address: string, amount: string) {
        // console.log("Post new transfer")
        return this.http.post<any>(`${this.backend}/transfers`, { account, name, address, amount }, this.httpOptions);
    }
    
}