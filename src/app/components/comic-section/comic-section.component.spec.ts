import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicSectionComponent } from './comic-section.component';

describe('ComicSectionComponent', () => {
  let component: ComicSectionComponent;
  let fixture: ComponentFixture<ComicSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
