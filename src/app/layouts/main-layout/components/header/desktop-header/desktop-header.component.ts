import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
	selector: 'app-desktop-header',
	standalone: true,
	imports: [MatIconModule, MatButtonModule, MatToolbarModule, MatMenuModule, MatInputModule, MatFormFieldModule],
	templateUrl: './desktop-header.component.html',
	styleUrl: './desktop-header.component.scss'
})
export class DesktopHeaderComponent {

}
