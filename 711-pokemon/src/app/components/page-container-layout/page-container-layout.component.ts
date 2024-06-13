import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-page-container-layout',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './page-container-layout.component.html',
	styleUrl: './page-container-layout.component.scss'
})
export class PageContainerLayoutComponent {
	@Input() className = ' ';
	@Input() isFullPage = true;
	styleClass = '';

	ngOnInit(): void {
		this.styleClass = 'pb-16 ' + this.className;
	}

}
