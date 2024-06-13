import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IPokemon } from './pokemon.interface';

@Injectable({
	providedIn: 'root'
})
export class PokemonService {

	private readonly POKEMAN_API_URL = environment.API_URL + 'pokemon/';

	constructor(
		private http: HttpClient
	) { }

	getPokemanList(limit?: number, offset?: number) {
		return this.http.get<{
			data: {
				count: number;
				pokemonList: IPokemon[];
			}
		}>(this.POKEMAN_API_URL, { params: { limit, offset } });
	}

	getPokemon(pokemonId: string) {
		return this.http.get<{
			data: {
				pokemon: IPokemon;
			}
		}>(`${this.POKEMAN_API_URL}${pokemonId}`);
	}

}
