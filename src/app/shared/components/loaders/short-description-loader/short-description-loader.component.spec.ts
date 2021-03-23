import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ShortDescriptionLoaderComponent} from './short-description-loader.component';

describe('ShortDescriptionLoaderComponent', () => {
  let component: ShortDescriptionLoaderComponent;
  let fixture: ComponentFixture<ShortDescriptionLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShortDescriptionLoaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortDescriptionLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
