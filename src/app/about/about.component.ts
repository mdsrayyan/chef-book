import {Component, OnInit} from '@angular/core';
import {UserProfileService} from '../core/user-profile.service';
import {Observable} from 'rxjs';
import {About} from '../shared/models/book.model';

@Component({
  selector: 'book-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutMe$!: Observable<About>;

  constructor(private readonly userProfile: UserProfileService) {
  }

  ngOnInit(): void {
    this.aboutMe$ = this.userProfile.getAboutMe();
  }

}
