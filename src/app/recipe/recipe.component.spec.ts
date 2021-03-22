import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { RecipeComponent } from './recipe.component';
import {ActivatedRoute} from '@angular/router';

describe('RecipeComponent', () => {
  let component: RecipeComponent;
  let fixture: ComponentFixture<RecipeComponent>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      declarations: [ RecipeComponent ],
      providers: [ActivatedRoute]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
