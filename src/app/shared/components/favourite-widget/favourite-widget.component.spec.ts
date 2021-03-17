import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteWidgetComponent } from './favourite-widget.component';

describe('FavouriteWidgetComponent', () => {
  let component: FavouriteWidgetComponent;
  let fixture: ComponentFixture<FavouriteWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
