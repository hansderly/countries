import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  country: [],
};

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default countrySlice.reducer;
