import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Transfer } from '../../models/transfer'
import { TransferService } from '../../services/transfer.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
    currentUser: User;
    currentUserSubscription: Subscription;
    transfers: Transfer[] = [];

    constructor(private router: Router, private transferService: TransferService, private authService: AuthService) {
        if (!this.authService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.transferService.getHistory("admin")
            .pipe(first())
            .subscribe(
                data => {
                    this.transfers = data;
                    // console.log(data);
                },
                error => {
                    // console.log(error);
                });
    }
}

