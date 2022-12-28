import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: [],
  movie: [],
  banner: [],
  id: null
}

export const movieSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    getAllMovie: (state, actions) => {
      state.movies = actions.payload
    },
    getOneMovie: (state, actions) => {
      state.movie = actions.payload
    },
    getId: (state, actions) => {
      state.id = actions.payload
    },
    getBanner: (state, actions) => {
      state.banner = actions.payload
    },
    
   
  },
})


export const { getAllMovie, getOneMovie, getId, getBanner } = movieSlice.actions

export default movieSlice.reducer