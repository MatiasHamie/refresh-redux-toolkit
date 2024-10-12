import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
  isLoading: false,
  page: 0,
};

export const pokemonsSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    },
  },
});

export const { setPokemons, startLoadingPokemons } = pokemonsSlice.actions;
