import { configureStore } from '@reduxjs/toolkit'
import  darkModeSlice  from './slice/drakmodeSlice.js'
import  movieSlice  from './slice/movieSlice.js'


export const store = configureStore({
  reducer: {
    mode:darkModeSlice,
    movie:movieSlice
  },
})