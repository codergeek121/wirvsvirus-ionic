import { Component, Input } from '@angular/core';
import { Store } from 'src/app/services/backend.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent {
  @Input() store: Store;

  constructor() {}
}
