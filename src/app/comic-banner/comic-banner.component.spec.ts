import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicBannerComponent } from './comic-banner.component';

describe('ComicBannerComponent', () => {
  let component: ComicBannerComponent;
  let fixture: ComponentFixture<ComicBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
