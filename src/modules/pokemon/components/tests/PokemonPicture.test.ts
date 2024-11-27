import {mount} from '@vue/test-utils';
import PokemonPicture from '../PokemonPicture.vue';


describe('<PokemonPicture />', () => {
    test('src image', () => {
        const pokemonId = 24;
        const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/24.svg';

        const wrapper = mount(PokemonPicture, {
            props: {pokemonId, showPokemon: false}
        })

        const img = wrapper.find('img');
        const src = img.attributes('src');

        expect(src).toBe(imgUrl)
    });

    test('render one img', () => {
        const pokemonId = 24;
        const wrapper = mount(PokemonPicture, {
            props: {pokemonId, showPokemon: false}
        })

        const imgs = wrapper.findAll('img');

        expect(imgs.length).toBe(1)
    });
    

});
