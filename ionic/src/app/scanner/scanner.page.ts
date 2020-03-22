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
			if(resp.valid === "True"){
				this.codeStatus.valid = true
				this.codeStatus.reservation.starts_at = resp.start
				this.codeStatus.reservation.ends_at = resp.end
			}
		})
		
	}
}
