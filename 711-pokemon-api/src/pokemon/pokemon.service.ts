import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { QueryPokemonDto } from './dto/query-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { IPokemon, ObjectType } from './interfaces/pokemon.interface';
import { HelperService } from '../utility/helper/helper.service';

@Injectable()
export class PokemonService {
	private POKEMAN_BASE_URL = 'https://pokeapi.co/api/v2/';
	// "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20
	constructor(
		private readonly helperService: HelperService
	) { }


	create(createPokemonDto: CreatePokemonDto) {
		return 'This action adds a new pokemon';
	}

	async getPokemonList(query: QueryPokemonDto) {
		const pokemonRawList = await this.helperService.sendHttpRequest<{
			count: number;
			results: { name: string; url: string }[];
		}>({
			url: `${this.POKEMAN_BASE_URL}/pokemon`,
			params: { offset: query.offset, limit: query.limit }
		});
		const pokemonUrls = pokemonRawList.results.map(pokemon => pokemon.url);
		const pokemonDetailsList = await Promise.all(pokemonUrls.map(async url => await this.helperService.sendHttpRequest<ObjectType>({ url })));
		const pokemonList: Pick<IPokemon, 'id' | 'name'>[] = pokemonDetailsList.map(pokeman => {
			return {
				id: pokeman.id, name: pokeman.name,
				image: pokeman.sprites.front_default,
			};
		});
		return {
			count: pokemonRawList.count,
			pokemonList
		};
	}

	async getPokemon(pokemonId: string): Promise<{ pokemon: IPokemon; }> {
		const pokemonRawData = await this.helperService.sendHttpRequest({
			url: `${this.POKEMAN_BASE_URL}/pokemon/${pokemonId}`,
		}) as { moves: { move: { url: string; } }[] } & ObjectType;

		if (!pokemonRawData) {
			throw new NotFoundException('Pokemon not found!')
		}

		const moveRawListResponse = await Promise.allSettled(pokemonRawData.moves.map(async move => {
			return await this.helperService.sendHttpRequest<ObjectType>({
				url: move.move.url,
				onlyWhenSettled: true
			});
		}));

		const moveRawListPromises = moveRawListResponse.filter(move => move.status === 'fulfilled' && move.value !== null) as { value: ObjectType }[]; // returned as { value: ObjectType }[] because filter defaults to only status type in object.
		const moves = moveRawListPromises.map(rawMove => {
			const move = rawMove.value
			return {
				id: move.id,
				name: move.name,
				accuracy: move.accuracy,
				power: move.power
			}
		})

		const pokemon: IPokemon = {
			id: pokemonRawData.id,
			name: pokemonRawData.name,
			image: pokemonRawData.sprites.front_default,
			moves,
			generation: Object.keys(pokemonRawData.sprites.versions),
			weight: pokemonRawData.weight,
		}

		return { pokemon };
	}

	update(id: number, updatePokemonDto: UpdatePokemonDto) {
		return `This action updates a #${id} pokemon`;
	}

	remove(id: number) {
		return `This action removes a #${id} pokemon`;
	}
}
