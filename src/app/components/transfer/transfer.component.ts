import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSend() {
    console.log('Transfering money...')
  }

  logout() {
    this.router.navigate(['/login']);
  }
}