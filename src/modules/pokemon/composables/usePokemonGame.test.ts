import { mount, flushPromises } from '@vue/test-utils';

import { defineComponent, h } from 'vue';
import { usePokemonGame } from './usePokemonGame';
import { pokemonApi } from '../api/pokemonApi';
import confetti from 'canvas-confetti';

const res = {
  count: 1302,
  next: 'https://pokeapi.co/api/v2/pokemon/?offset=5&limit=5',
  previous: null,
  results: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
    {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/2/',
    },
    {
      name: 'venusaur',
      url: 'https://pokeapi.co/api/v2/pokemon/3/',
    },
    {
      name: 'charmander',
      url: 'https://pokeapi.co/api/v2/pokemon/4/',
    },
    {
      name: 'charmeleon',
      url: 'https://pokeapi.co/api/v2/pokemon/5/',
    },
  ],
};

vi.mock('canvas-confetti', () => ({
  default: vi.fn(),
}));

describe('usePokemonGame', () => {
  test('confetti excute', async () => {
    await vi.spyOn(pokemonApi, 'get').mockImplementation(() => Promise.resolve({ data: res }));

    const TestComponent = defineComponent({
      props: {
        /* ... */
      },
      render() {
        return h('div', '');
      },
      setup(props) {
        return {
          // Call the composable and expose all return values into our
          // component instance so we can access them with wrapper.vm
          ...usePokemonGame(),
        };
      },
    });


    const wrapper = mount(TestComponent);

    await flushPromises();

    // console.log('aaaa',wrapper.vm.randomPokemon )
    // const z = wrapper.vm.randomPokemon?.id

    // console.log(wrapper.vm.checkAnswer(wrapper.vm.randomPokemon?.id));
    expect(wrapper.vm.checkAnswer(wrapper.vm.randomPokemon?.id));
  });
});
