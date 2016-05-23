import { Component, OnInit } from '@angular/core';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav/';

@Component({
  moduleId: module.id,
  selector: 'app-nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.css'],
  directives: [
    MD_SIDENAV_DIRECTIVES,
  ]
})
export class NavBarComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
