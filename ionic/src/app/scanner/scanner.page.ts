import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {
  bookingCode = "";

  codeStatus = {
    valid: false,
    reservation: {
      date: "01.01.2020",
      starts_at: "13:45",
      ends_at: "14:00"
    }
  }

  constructor() { }

  ngOnInit() {
  }

  checkBookingCode() {
    this.codeStatus.valid = !this.codeStatus.valid
  }
}
