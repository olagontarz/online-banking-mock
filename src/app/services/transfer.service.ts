import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TransferService {
    backend:String = 'https://online-banking-backend.herokuapp.com';

    constructor(private http: HttpClient) { }


    getHistory(user: string) {
        console.log("Get transfers history for user")
        return this.http.get<any>(`${this.backend}/transfers/${user}`);
    }

    send(account: string, name: string, address: string, amount: string) {
        console.log("Post new transfer")
        return this.http.post<any>(`${this.backend}/transfers`, { account, name, address, amount });
    }
    
}