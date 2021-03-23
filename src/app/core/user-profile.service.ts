import { Injectable } from '@angular/core';
import {About, Recipe} from '../shared/models/book.model';
import aboutMe from './mock-data/mock-about-me';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  constructor(private fireService: AngularFirestore,) { }

  getAboutMe(): Observable<About> {
    return this.fireService.collection('profile')
      .doc('/' + 'S5ZqCuG0HRTCdtQRelfe')
      .get()
      .pipe(map(doc => {
        const payload: About = doc.data() as About;
        return payload as Recipe;
      }));

  }
}
