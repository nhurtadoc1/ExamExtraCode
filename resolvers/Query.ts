import { GraphQLError } from "graphql";
import { isDefinitionNode } from "graphql";

type CharacterInfo = {
    id: number;
    name: string
    status: string
    species: string
}

export const Query = {
    character: async( id: string ): Promise<CharacterInfo> => {
        const url = "https://rickandmortyapi.com/api/character/5";

        console.log(url);

        const response = await fetch(url);

        if(response.status !== 200) {
            console.error("Error");
        }

        const data = await response.json;

        return {
            id: 444,
            name: data.arguments.name,
            status: data.arguments.status,
            species: data.arguments.species,
        };
    }
};