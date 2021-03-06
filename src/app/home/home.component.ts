import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: string;
  isLoading: boolean;
  username: string = localStorage.getItem('username');

  constructor() {}

  ngOnInit() {
    this.isLoading = true;

    const options = {
      stringsElement: '#typed-strings',
      typeSpeed: 30,
      backSpeed: 20,
      backDelay: 1500,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };

    const typed = new Typed('.typed-element', options);
  }
}
