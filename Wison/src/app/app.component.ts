import { Component, OnInit } from '@angular/core';
import { Text } from "../assets/ts/text"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }

  text: string = '';

  ngOnInit() {
  }

  realizarAccion() {
  }
}
