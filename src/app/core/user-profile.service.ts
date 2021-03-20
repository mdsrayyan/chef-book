import { Injectable } from '@angular/core';
import {About} from '../shared/models/book.model';
import aboutMe from './mock-data/mock-about-me';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private aboutMe: About = JSON.parse(JSON.stringify(aboutMe));
  private aboutMe$: BehaviorSubject<About> = new BehaviorSubject(this.aboutMe);
  constructor() { }

  getAboutMe(): Observable<About> {
    return this.aboutMe$.asObservable();
  }
}
