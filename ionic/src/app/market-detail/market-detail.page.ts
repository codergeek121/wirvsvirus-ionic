import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-market-detail',
  templateUrl: './market-detail.page.html',
  styleUrls: ['./market-detail.page.scss'],
})
export class MarketDetailPage implements OnInit {
  market = {
    name: "Testmarkt abc",
    street: "Musterweg 13",
    plz: "80801",
    city: "München"
  }

  timeslots = [
    { id: 1, starts_at: "12:00", ends_at: "12:20" },
    { id: 2, starts_at: "12:20", ends_at: "12:40" },
    { id: 3, starts_at: "12:40", ends_at: "12:60" },
    { id: 4, starts_at: "13:00", ends_at: "13:20" }
  ]

  selectedTimeslot = {
    id: 1,
    desc: ""
  }

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private pickerController: PickerController
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      console.log(params["id"])
    })
  }

  public async openPicker() {
    const picker = await this.pickerController.create({
      columns: [
        { name: "timeslots", options: this.timeSlotsToColumns()}
      ],
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        { text: 'Confirm', handler: (value) => {
          console.log(value)
          this.selectedTimeslot.id = value.timeslots.value
          this.selectedTimeslot.desc = value.timeslots.text
        }},
      ]
    })
    await picker.present();
  }

  public bookTimeslot() {
    console.log("Timeslot gebucht:", this.selectedTimeslot)
  }

  private timeSlotsToColumns() {
    return this.timeslots.map( slot => { 
      return { text: `${slot.starts_at} bis ${slot.ends_at}`, value: slot.id} 
    })
  }
}
