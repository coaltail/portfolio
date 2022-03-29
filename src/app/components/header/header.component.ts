import { Component, OnInit } from '@angular/core';
import { DropDownAnimation } from './animation';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [DropDownAnimation]
})
export class HeaderComponent implements OnInit {
  showMyContainer: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
}
