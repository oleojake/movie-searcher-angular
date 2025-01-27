import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSceneComponent } from './search-scene.component';

describe('SearchSceneComponent', () => {
  let component: SearchSceneComponent;
  let fixture: ComponentFixture<SearchSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchSceneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
