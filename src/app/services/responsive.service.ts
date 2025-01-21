import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class ResponsiveService {
	private screenWidth$ = new BehaviorSubject<number>(window.innerWidth);

	constructor() {
		fromEvent(window, 'resize')
			.pipe(map(() => window.innerWidth))
			.subscribe(this.screenWidth$);
	}

	get isMobile$() {
		return this.screenWidth$.asObservable().pipe(map((width) => width <= 768));
	}

}
