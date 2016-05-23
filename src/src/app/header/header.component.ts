import { Component, OnInit } from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  directives: [MdToolbar]
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
