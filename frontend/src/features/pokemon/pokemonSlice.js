import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    pokemons: [],
    status: 'idle',
    error: null,
};

export const fetchPokemons = createAsyncThunk('pokemon/fetchPokemons', async (limit) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    return response.data.results;
});

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemons.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPokemons.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.pokemons = action.payload;
            })
            .addCase(fetchPokemons.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default pokemonSlice.reducer;