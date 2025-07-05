import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './Slice/categoriesSlice';
import brandsReducer from './Slice/brandSlice';
import trendingReducer from './Slice/trendingSlice';


export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    brands: brandsReducer,
    trending: trendingReducer,
   
  },
});
