import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'GAP', image: '/images/brand1.jpg' },
    { id: 2, name: 'Levis', image: '/images/brand2.jpg' },
    { id: 3, name: 'Aarong', image: '/images/brand3.jpg' },
    { id: 4, name: 'Zara', image: '/images/brand4.jpg' },
  ],
};

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
