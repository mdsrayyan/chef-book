import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'book-recent-widget',
  templateUrl: './recent-widget.component.html',
  styleUrls: ['./recent-widget.component.scss']
})
export class RecentWidgetComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  navigateToRecipe() {
    this.router.navigate([`/recipe/1`]);
  }
}
