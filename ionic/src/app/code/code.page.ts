import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code',
  templateUrl: './code.page.html',
  styleUrls: ['./code.page.scss'],
})
export class CodePage implements OnInit {
  public code: any;

  constructor(
    private router: Router
  ) { 
    this.code = this.router.getCurrentNavigation().extras.state
  }
}
