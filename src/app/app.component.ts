import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet,RouterLink],

})
export class AppComponent implements OnInit {
  constructor() {

  }
  ngOnInit(): void {
  }

}
