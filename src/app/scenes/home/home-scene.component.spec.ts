import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeScene } from './home-scene.component';

describe('HomeComponent', () => {
	let component: HomeScene;
	let fixture: ComponentFixture<HomeScene>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HomeScene]
		})
			.compileComponents();

		fixture = TestBed.createComponent(HomeScene);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
