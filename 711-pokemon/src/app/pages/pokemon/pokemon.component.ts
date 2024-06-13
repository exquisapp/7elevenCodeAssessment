import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardLayoutComponent } from '../../components/card-layout/card-layout.component';
import { ItemContainerLayoutComponent } from '../../components/item-container-layout/item-container-layout.component';
import { PageContainerLayoutComponent } from '../../components/page-container-layout/page-container-layout.component';
import { SearchFilterComponent } from '../../components/search-filter/search-filter.component';
import { IPokemon } from './pokemon.interface';
import { PokemonService } from './pokemon.service';

@Component({
	selector: 'app-pokemon',
	standalone: true,
	imports: [NgIf, RouterLink, CommonModule, NgForOf, CardLayoutComponent, ItemContainerLayoutComponent, PageContainerLayoutComponent, SearchFilterComponent],
	templateUrl: './pokemon.component.html',
	styleUrl: './pokemon.component.scss'
})
export class PokemonComponent implements OnInit {
	pokemons = signal<IPokemon[]>([]);
	private pokemonList: IPokemon[] = [];
	pokemonCount = 0

	limit = 32;
	private offset = 0;

	constructor(
		private pokemonService: PokemonService
	) { }

	onFilterData(search: string) {
		const filteredPokeman = this.pokemonList.filter(pokemon => pokemon.name.includes(search.toLowerCase()))
		this.pokemons.set(filteredPokeman);
	}

	onPaginate() {
		this.offset = this.offset + this.limit;
		this.pokemonService.getPokemanList(this.limit, this.offset).subscribe({
			next: pokemons => {
				this.pokemons.set([...this.pokemonList, ...pokemons.data.pokemonList]);
				this.pokemonList = [...this.pokemonList, ...pokemons.data.pokemonList];
			}
		});
	}

	ngOnInit() {
		this.pokemonService.getPokemanList(this.limit, this.offset).subscribe({
			next: pokemons => {
				this.pokemons.set(pokemons.data.pokemonList);
				this.pokemonList = pokemons.data.pokemonList
				this.pokemonCount = pokemons.data.count;
			}
		})
	}

}
