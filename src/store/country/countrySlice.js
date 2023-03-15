/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://restcountries.com/v3.1';

const getCountry = createAsyncThunk('country/getCountry', async () => {
  const endpoint = '/region/europe';
  const url = baseURL + endpoint;
  const { data } = await axios.get(url);
  return data;
});

const initialState = {
  countries: [],
  searchCountry: {},
};

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    searchByName: (state, { payload }) => {
      const { countryName } = payload;
      const country = state.countries.filter((country) => country.name.common === countryName);

      const {
        capital, flags, tld, startOfWeek, name, population,
      } = country[0];

      state.searchCountry = {
        capital: capital[0], tld: tld[0], flags: flags.png, startOfWeek, oficialName: name.official, population,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCountry.fulfilled, (state, { payload }) => {
      state.countries = payload;
    });
  },
});

export { getCountry };
export const { searchByName } = countrySlice.actions;
export default countrySlice.reducer;
