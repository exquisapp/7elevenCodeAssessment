import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon';
import { HelperModule } from './utility';

@Module({
	imports: [HelperModule, PokemonModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
