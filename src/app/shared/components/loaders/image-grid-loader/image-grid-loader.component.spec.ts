import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGridLoaderComponent } from './image-grid-loader.component';

describe('ImageGridLoaderComponent', () => {
  let component: ImageGridLoaderComponent;
  let fixture: ComponentFixture<ImageGridLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageGridLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGridLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
