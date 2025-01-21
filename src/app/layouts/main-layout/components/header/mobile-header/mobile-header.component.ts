import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
	selector: 'app-mobile-header',
	standalone: true,
	imports: [MatIconModule, MatButtonModule, MatToolbarModule, MatMenuModule, MatInputModule, MatFormFieldModule],
	templateUrl: './mobile-header.component.html',
	styleUrl: './mobile-header.component.scss'
})
export class MobileHeaderComponent {

}
