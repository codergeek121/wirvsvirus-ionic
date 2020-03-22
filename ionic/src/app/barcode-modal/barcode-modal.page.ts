import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-barcode-modal',
  templateUrl: './barcode-modal.page.html',
  styleUrls: ['./barcode-modal.page.scss'],
})
export class BarcodeModalPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  public async closeModal() {
    this.modalController.dismiss()
  }
}
