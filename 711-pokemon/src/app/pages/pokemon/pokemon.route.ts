import { Routes } from '@angular/router';

export const pokemonRoutes: Routes = [
	{
		path: '',
		loadComponent: () => import('./pokemon.component')
			.then(m => m.PokemonComponent)
	},
	{
		path: ':pokemonId',
		loadComponent: () => import('./pokemon-details/pokemon-details.component')
			.then(m => m.PokemonDetailsComponent)
	},

];
