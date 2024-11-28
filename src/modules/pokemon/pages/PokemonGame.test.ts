import { usePokemonGame } from "../composables/usePokemonGame";
import { mount, flushPromises } from '@vue/test-utils';
import PokemonGame from "./PokemonGame.vue";


describe('PokemonGame', () => {
    const mock = vi.hoisted(() => {
        return {
            composable: vi.fn().mockReturnValue({
            gameStatus: 'playing',
            isLoading: false,
            pokemonOptions: [{
                id: 1,
                name: 'bulbasaur',
              },
              {
                id: 2,
                name: 'ivysaur',
              },
              {
                id: 3,
                name: 'venusaur',
              },
              {
                id: 4,
                name: 'charmander',
              },
              {
                id: 5,
                name: 'charmeleon',
              },] ,
            randomPokemon: {
                id: 1,
                name: 'bulbasaur',
              },
            getNextRound: vi.fn(),
            checkAnswer: vi.fn() ,
          }),
        };
      });
      
      vi.mock('../composables/usePokemonGame', () => ({
        usePokemonGame: mock.composable,
      }));

    test('mock de composable', () => {

        const wrapper = mount(PokemonGame);
        
        console.log(wrapper.html())

        const h1 = wrapper.find('h1');
        console.log(h1)

        
    });
    
    
});
