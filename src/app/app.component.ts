import { Component } from '@angular/core';

@Component({
  selector: 'book-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chef-book';
  scrollTop(event) {
    window.scroll(0,0);
  }
}
