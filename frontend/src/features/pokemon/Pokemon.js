import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons } from './pokemonSlice';

const Pokemon = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemon.pokemons || []);
    const status = useSelector((state) => state.pokemon.status);
    const count = useSelector((state) => state.counter.value);

    return (
        <div>
            {/* nếu trong redux state.pokemon.status === 'loading' thì trả về màn hình xám */} 
            {status === 'loading' ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <button onClick={() => dispatch(fetchPokemons(count))}>Fetch Pokemons</button>
                    <ul>
                        {pokemons.map((pokemon, index) => (
                            <li key={index}>{pokemon.name}</li>
                        ))}
                    </ul>
                </div>
            )    
            }
        </div>
    );
};

export default Pokemon;