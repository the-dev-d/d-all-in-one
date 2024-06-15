import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlocktextComponent } from './components/blocktext/blocktext.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuItem } from './types';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlocktextComponent, NavbarComponent, NgOptimizedImage],
  templateUrl: './app.component.html',
})
export class AppComponent{
  
    menuItems: MenuItem[] = [
      {
        name: "Home",
        icon: "account_circle",
        url: "/"
      },
      {
        name: "JWT",
        icon: "encrypted",
        url: "/jwt"
      },
      {
        name: "Typer",
        icon: "text_fields_alt",
        url: "/typer"
      }
    ];

    constructor() {
       
    }

}
