import { Test, TestingModule } from '@nestjs/testing';
import { PokemonService } from './pokemon.service';
import { HelperService } from '../utility/helper/helper.service';
import { QueryPokemonDto } from './dto/query-pokemon.dto';

const mockHelperService = {
	sendHttpRequest: jest.fn(),
};

describe('PokemonService', () => {
	let service: PokemonService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				PokemonService,
				{
					provide: HelperService,
					useValue: mockHelperService,
				},
			],
		}).compile();

		service = module.get<PokemonService>(PokemonService);
	});

	describe('Pokeman service', () => {
		it('should return a list of pokemon', async () => {
			const query: QueryPokemonDto = { offset: 0, limit: 20 };
			const mockPokemonList = {
				results: [
					{ name: 'Pikachu', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
					{ name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
				],
			};
			const mockPokemonDetails = {
				id: 1,
				name: 'Pikachu',
			};

			mockHelperService.sendHttpRequest
				.mockResolvedValueOnce(mockPokemonList)
				.mockResolvedValue(mockPokemonDetails);

			const result = await service.getPokemonList(query);
			expect(result).toEqual({
				pokemonList: [
					{ id: 1, name: 'Pikachu' },
					{ id: 1, name: 'Pikachu' },
				],
			});
		});

		// 	it('should return an object of pokemon', async () => {
		// 		const pokemonId = '4';
		// 		const mockPokemonList = {
		// 			results: [
		// 				{ id: 1, name: 'Pikachu', weight: 34 },
		// 				{ id: 2, name: 'Bulbasaur', weight: 100 },
		// 			],
		// 		};
		// 		const mockPokemonDetails = {
		// 			id: 1,
		// 			name: 'Pikachu',
		// 			weight: 'Pikachu',
		// 		};

		// 		mockHelperService.sendHttpRequest
		// 			.mockResolvedValueOnce(mockPokemonList)
		// 			.mockResolvedValue(mockPokemonDetails);

		// 		const result = await service.getPokemon(pokemonId);
		// 		expect(result).toBeDefined();
		// 	});

	});
});
