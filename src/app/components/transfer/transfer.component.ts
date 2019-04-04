import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { TransferService } from '../../services/transfer.service';
import { AuthService } from '../../services/auth.service';


@Component({
    selector: 'app-transfer',
    templateUrl: './transfer.component.html',
    styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
    submitted = false;
    transferForm: FormGroup;
    loading = false;

    constructor(private router: Router, private formBuilder: FormBuilder, private transferService: TransferService, private authService: AuthService) {
        if (!this.authService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }


    ngOnInit() {
        this.transferForm = this.formBuilder.group({
            account: ['', [ Validators.required, Validators.pattern("^[0-9]*$") ]],
            name: ['', [ Validators.required ] ],
            address: ['', [] ],
            amount: ['', [ Validators.required, Validators.pattern('^[0-9]+\.[0-9]{0,2}$') ]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.transferForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.transferForm.invalid) {
            return;
        }

        this.loading = true;
        // console.log('Transfering money...')

        this.transferService.send(this.f.account.value, this.f.name.value, this.f.address.value, this.f.amount.value)
            .pipe(first())
            .subscribe(
                data => {
                    // console.log(data);
                    this.loading = false;
                    this.router.navigate(['/history'])
                },
                error => {
                    // console.log(error);
                });
    }
}
