import { createSlice } from '@reduxjs/toolkit';
import { songs } from "../data.js"
const initialState = {
  songsList: songs,
  isPlayingSong: false,
  currentSong: null,
  isPlay: false,
};

export const songsListSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setIsPlayingSong: (state, action) => {
      state.isPlayingSong = action.payload
    },
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload
    },
    setIsPlay: (state, action) => {
      state.isPlay = action.payload
    }
  },
})

export const { setIsPlayingSong, setCurrentSong, setIsPlay } = songsListSlice.actions

export default songsListSlice.reducer