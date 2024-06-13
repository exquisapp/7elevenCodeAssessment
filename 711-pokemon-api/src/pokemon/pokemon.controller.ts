import { Controller, Get, Param, Res, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

import { PokemonService } from './pokemon.service';

@ApiTags('Pokeman')
@Controller('pokemon')
export class PokemonController {
	constructor(
		private readonly pokemonService: PokemonService
	) { }

	@Get()
	async getPokemonList(
		@Res() res: Response,
		@Query('limit') limit: number,
		@Query('offset') offset: number
	) {
		const data = await this.pokemonService.getPokemonList({ limit, offset });
		res.status(200).json({ data });
	}

	@Get(':pokemonId')
	async getPokemon(
		@Res() res: Response,
		@Param('pokemonId') pokemonId: string
	) {
		const data = await this.pokemonService.getPokemon(pokemonId);
		res.status(200).json({ data });
	}

}
