import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastingListComponent } from './casting-list.component';

describe('CastingListComponent', () => {
  let component: CastingListComponent;
  let fixture: ComponentFixture<CastingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CastingListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CastingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
