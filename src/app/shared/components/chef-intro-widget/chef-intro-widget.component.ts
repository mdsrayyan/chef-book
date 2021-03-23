import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {About} from '../../models/book.model';
import {UserProfileService} from '../../../core/user-profile.service';

@Component({
  selector: 'book-chef-intro-widget',
  templateUrl: './chef-intro-widget.component.html',
  styleUrls: ['./chef-intro-widget.component.scss']
})
export class ChefIntroWidgetComponent implements OnInit {
  aboutMe$!: Observable<About>;

  constructor(private readonly router: Router,
              private readonly userProfile: UserProfileService) {
  }

  ngOnInit(): void {
    this.aboutMe$ = this.userProfile.getAboutMe();
  }

  navigate(): void {
    this.router.navigate([`/about`]);
  }
}
