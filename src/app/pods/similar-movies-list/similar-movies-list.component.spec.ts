import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarMoviesListComponent } from './similar-movies-list.component';

describe('SimilarMoviesListComponent', () => {
  let component: SimilarMoviesListComponent;
  let fixture: ComponentFixture<SimilarMoviesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimilarMoviesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimilarMoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
