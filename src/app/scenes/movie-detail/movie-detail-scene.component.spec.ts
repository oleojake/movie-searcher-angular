import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailScene } from './movie-detail-scene.component';

describe('MovieDetailComponent', () => {
	let component: MovieDetailScene;
	let fixture: ComponentFixture<MovieDetailScene>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MovieDetailScene]
		})
			.compileComponents();

		fixture = TestBed.createComponent(MovieDetailScene);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
