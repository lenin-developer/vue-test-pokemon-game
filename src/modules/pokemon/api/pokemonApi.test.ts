import { pokemonApi, } from "./pokemonApi";

describe('pokemonApi', () => {
    test('baseURL is correct', () => {

        const  baseURL = 'https://pokeapi.co/api/v2/pokemon';

        expect(pokemonApi.defaults.baseURL).toBe(baseURL)
        
    });
    
});
