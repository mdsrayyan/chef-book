import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'book-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private readonly router: Router) {
  }

  ngOnInit(): void {
  }

  navigate(path: string) {
    this.router.navigate([`/${path}`]);
  }

  navigateCategory(path: string) {
    this.router.navigate([`/category/${path}`]);
  }
}
