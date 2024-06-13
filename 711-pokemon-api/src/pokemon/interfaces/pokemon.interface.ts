export interface IPokemon {
	id: string;
	name: string;
	image: string;
	weight: number;
	moves: Record<string, any>[];
	generation: string[];
}



export type ObjectType = Record<string, any>;