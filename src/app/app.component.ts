import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', 
  imports: [RouterOutlet,RouterModule], //routermodule serve per fare collegamenti
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'houseCupFront';
}