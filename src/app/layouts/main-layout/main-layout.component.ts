import { Component, OnInit } from '@angular/core';
import { FooterComponent, DesktopHeaderComponent, MobileHeaderComponent } from './components/index';
import { ResponsiveService } from '@services/responsive.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-main-layout',
	standalone: true,
	imports: [DesktopHeaderComponent, FooterComponent, MobileHeaderComponent, CommonModule],
	templateUrl: './main-layout.component.html',
	styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit {
	isMobile$!: Observable<boolean>;

	constructor(private responsiveService: ResponsiveService) { }

	ngOnInit(): void {
		this.isMobile$ = this.responsiveService.isMobile$;
	}

}
