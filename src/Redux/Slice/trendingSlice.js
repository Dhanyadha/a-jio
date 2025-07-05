import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, title: 'Pastel Bloom', image: '/images/trend1.jpg' },
    { id: 2, title: 'Chic Boss', image: '/images/trend2.jpg' },
  ],
};

const trendingSlice = createSlice({
  name: 'trending',
  initialState,
  reducers: {
    setTrending: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setTrending } = trendingSlice.actions;
export default trendingSlice.reducer;
