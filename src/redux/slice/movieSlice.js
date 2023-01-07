import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: [],
  movie: [],
  banner: [],
  genre:'all',
  id: null,
  search: 'all'
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
    setSearch: (state, actions) => {
      state.search = actions.payload
    },
    setGenre: (state, actions) => {
      state.genre = actions.payload
    },
    
   
  },
})


export const { getAllMovie, getOneMovie, getId, getBanner, setSearch, setGenre } = movieSlice.actions

export default movieSlice.reducer