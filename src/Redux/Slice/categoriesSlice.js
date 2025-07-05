import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Women Wear', image: '/images/women.jpg' },
    { id: 2, name: 'Men Wear', image: '/images/men.jpg' },
    { id: 3, name: 'Kids Wear', image: '/images/kids.jpg' },
  ],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
