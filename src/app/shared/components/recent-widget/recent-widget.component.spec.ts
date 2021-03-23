import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RecentWidgetComponent} from './recent-widget.component';

describe('RecentWidgetComponent', () => {
  let component: RecentWidgetComponent;
  let fixture: ComponentFixture<RecentWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentWidgetComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
