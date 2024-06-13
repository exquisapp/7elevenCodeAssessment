import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-item-container-layout',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './item-container-layout.component.html',
	styleUrls: ['./item-container-layout.component.scss']
})
export class ItemContainerLayoutComponent {
	@Input() itemCount = 0;
	@Input() title = 'filtered result(s)';
	@Input() maxWidth = 800;
	@Input() renderTitle = true;
	@Input() className = ' ';
	styleClass = '';
	style = '';

	ngOnInit(): void {
		this.style = `max-width: ${this.maxWidth}px`
		this.styleClass = 'container px-3 mx-auto py-4 ' + this.className;
	}
}
