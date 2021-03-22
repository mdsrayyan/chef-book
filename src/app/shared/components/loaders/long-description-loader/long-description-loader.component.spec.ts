import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongDescriptionLoaderComponent } from './long-description-loader.component';

describe('LongDescriptionLoaderComponent', () => {
  let component: LongDescriptionLoaderComponent;
  let fixture: ComponentFixture<LongDescriptionLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongDescriptionLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongDescriptionLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
