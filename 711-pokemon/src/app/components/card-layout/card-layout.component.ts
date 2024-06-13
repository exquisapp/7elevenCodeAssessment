import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-card-layout',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './card-layout.component.html',
	styleUrls: ['./card-layout.component.scss']
})
export class CardLayoutComponent implements OnInit {
	@Input() className = ' ';
	styleClass = '';

	ngOnInit(): void {
		this.styleClass = 'rounded-lg bg-white dark:bg-blue-900 border border-slate-300 ' + this.className;
	}

}
