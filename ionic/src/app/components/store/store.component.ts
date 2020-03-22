import { Component, OnInit, Input } from '@angular/core';
import { Store } from 'src/app/services/backend.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  @Input() store: Observable<Store>;

  constructor() { }

  ngOnInit() {}

}
