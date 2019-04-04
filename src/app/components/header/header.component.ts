import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { AuthGuard } from '../../services/auth.guard';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    logged = false;
    currentUser: User;
    currentUserSubscription: Subscription;

    constructor(private router: Router, private authService: AuthService, private authGuard: AuthGuard) {
        this.currentUserSubscription = this.authService.currentUser.subscribe(user => {
            this.currentUser = user;
            if (authService.currentUserValue) {
                this.logged = true;
            }
        });
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    onClick(event: Event): void {
        event.preventDefault();
        this.logged = false;
        this.authService.logout();
        this.router.navigate(['/']);
    }
}
