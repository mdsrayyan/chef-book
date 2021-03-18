import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'book-chef-intro-widget',
  templateUrl: './chef-intro-widget.component.html',
  styleUrls: ['./chef-intro-widget.component.scss']
})
export class ChefIntroWidgetComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigate([`/about`]);
  }
}
