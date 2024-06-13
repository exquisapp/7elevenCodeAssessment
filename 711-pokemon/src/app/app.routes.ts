import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '', redirectTo: 'pokemons', pathMatch: 'full'
	},
	{
		path: 'pokemons',
		loadChildren: () => import('./pages/pokemon/pokemon.route')
			.then(m => m.pokemonRoutes)
	}

];
