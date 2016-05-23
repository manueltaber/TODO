import { Component } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdToolbar} from '@angular2-material/toolbar';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MdButton, MdAnchor} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  moduleId: module.id,
  selector: 'main-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MD_INPUT_DIRECTIVES,
    MdButton,
    MdAnchor,
    MdIcon,
    HeaderComponent, 
    NavBarComponent, 
    FooterComponent
  ],
  viewProviders: [HTTP_PROVIDERS, MdIconRegistry]
})
export class AppComponent {
  title = '// todo';
  
  constructor() {
    
  }
}
