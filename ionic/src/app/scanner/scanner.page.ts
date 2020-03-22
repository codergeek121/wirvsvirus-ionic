import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {
  bookingCode = "";

  codeStatus = {
    hasBeenValidated: false,
    name: "Ungültig",
    valid: false,
    reservation: {
      date: "2020-03-26T06:00:00Z",
      starts_at: "2020-03-26T06:00:00Z",
      ends_at: "2020-03-26T06:00:00Z"
    }
  }

  constructor(private backendService: BackendService) { }

  ngOnInit() {
  }

  checkBookingCode() {
    //this.codeStatus.valid = !this.codeStatus.valid
		const response = this.backendService.validateBookingCode(this.bookingCode)
		response.subscribe(resp => {
			if(resp['valid'] === "True"){
				this.codeStatus.valid = true
				this.codeStatus.name = "Gültig",
				this.codeStatus.reservation.starts_at = resp['start']
				this.codeStatus.reservation.ends_at = resp['end']
			} else{
				this.codeStatus.valid = false
				this.codeStatus.name = "Ungültig",
				this.codeStatus.reservation.starts_at = ""
				this.codeStatus.reservation.ends_at = ""
			}
			this.codeStatus.hasBeenValidated = true

		})
		
	}
}
