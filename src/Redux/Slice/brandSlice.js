import { createSlice } from '@reduxjs/toolkit';



const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    setBrands: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setBrands } = brandsSlice.actions;
export default brandsSlice.reducer;
