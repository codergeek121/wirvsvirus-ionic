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
      date: "01.01.2020",
      starts_at: "13:45",
      ends_at: "14:00"
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
