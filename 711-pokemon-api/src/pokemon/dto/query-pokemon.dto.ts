import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class QueryPokemonDto {

	@ApiProperty({ required: false })
	@Transform(({ value }) => { Number(value) || null })
	@IsOptional()
	@IsNumber()
	limit: number;
	
	@ApiProperty({ required: false })
	@Transform(({ value }) => { Number(value) || null })
	@IsOptional()
	@IsNumber()
	offset: number;

}