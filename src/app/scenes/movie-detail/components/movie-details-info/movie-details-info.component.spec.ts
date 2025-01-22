import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsInfoComponent } from './movie-details-info.component';

describe('MovieDetailsInfoComponent', () => {
  let component: MovieDetailsInfoComponent;
  let fixture: ComponentFixture<MovieDetailsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDetailsInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
