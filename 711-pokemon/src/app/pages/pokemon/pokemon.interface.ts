export interface IBase {
	id: string;
	name: string;
}
export interface IPokemon extends IBase {
	id: string;
	image: string;
	weight: number;
	moves: IMove[];
	generation: string[];
}


export interface IMove extends IBase, ObjectType { }


export type ObjectType = Record<string, any>;