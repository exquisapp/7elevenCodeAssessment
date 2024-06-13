import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CardLayoutComponent } from '../../../components/card-layout/card-layout.component';
import { ItemContainerLayoutComponent } from '../../../components/item-container-layout/item-container-layout.component';
import { PageContainerLayoutComponent } from '../../../components/page-container-layout/page-container-layout.component';
import { IPokemon } from '../pokemon.interface';
import { PokemonService } from '../pokemon.service';

@Component({
	selector: 'app-pokemon-details',
	standalone: true,
	imports: [RouterLink, CardLayoutComponent, CommonModule, ItemContainerLayoutComponent, PageContainerLayoutComponent],
	templateUrl: './pokemon-details.component.html',
	styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent {
	private pokemonId: string;
	pokemon = signal<IPokemon>(null);

	constructor(
		private readonly activatedRoute: ActivatedRoute,
		private readonly pokemonService: PokemonService
	) { }


	ngOnInit() {
		this.activatedRoute.paramMap.subscribe({
			next: params => {
				this.pokemonId = params.get('pokemonId') || null;
				this.pokemonService.getPokemon(this.pokemonId).subscribe({
					next: pokemonData => {
						this.pokemon.set(pokemonData.data.pokemon);
					}
				})
			}
		});
	}

}
