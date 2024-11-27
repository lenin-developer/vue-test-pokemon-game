import {mount} from '@vue/test-utils';
import PokemonOptions from '../PokemonOptions.vue';
import { emit } from 'process';

describe('<PokemonOptions />', () => {

    const pokemons = [
        {
            id: 1,
            name: 'pikachu'
        },
        {
            id: 2,
            name: 'bulbasar'
        },
        {
            id: 3,
            name: 'pichoto'
        }

    ]

    test('render buttons', () => {
        const component = mount(PokemonOptions, {
            props: {options: pokemons, blockSelection: false, correctAnswer: 1}
        })

        const buttons = component.findAll('button');

        expect(buttons.length).toBe(pokemons.length)
    });

    test('execute emit', () => {
        const wrapper = mount(PokemonOptions, {
            props: {options: pokemons, blockSelection: false, correctAnswer: 1},
        })

        const button = wrapper.find('button');
        button?.trigger('click')

        expect(wrapper.emitted()?.selectedOption).toBeTruthy()
    });
    
    
    
});
