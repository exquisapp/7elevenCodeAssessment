import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-search-filter',
	standalone: true,
	imports: [],
	templateUrl: './search-filter.component.html',
	styleUrl: './search-filter.component.scss'
})
export class SearchFilterComponent {
	@Input() isDisabled = false;
	@Output() searchFilter = new EventEmitter<string>();

	private timeOut: any;

	onSearch(event: Event): void {
		let search = (event.target as HTMLInputElement).value;
		if (search === ' ') {
			return;
		}
		clearTimeout(this.timeOut);
		this.timeOut = setTimeout(() => {
			this.searchFilter.emit(search?.toLowerCase());
		}, 1200);
	}

}
