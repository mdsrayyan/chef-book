import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefIntroWidgetComponent } from './chef-intro-widget.component';

describe('ChefIntroWidgetComponent', () => {
  let component: ChefIntroWidgetComponent;
  let fixture: ComponentFixture<ChefIntroWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefIntroWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefIntroWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
