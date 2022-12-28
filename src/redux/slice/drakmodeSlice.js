import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: false 
}

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    switchMode: (state, actions) => {
      state.mode = actions.payload
    },
   
  },
})


export const { switchMode } = darkModeSlice.actions

export default darkModeSlice.reducer