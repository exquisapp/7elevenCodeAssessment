import { Test, TestingModule } from '@nestjs/testing';
import { HelperModule } from '../utility/helper/helper.module';

import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';

describe('PokemonController', () => {
	let controller: PokemonController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [HelperModule],
			controllers: [PokemonController],
			providers: [PokemonService],
		}).compile();

		controller = module.get<PokemonController>(PokemonController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
