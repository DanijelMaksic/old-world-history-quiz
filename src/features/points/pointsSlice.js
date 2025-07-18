import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   points: 0,
   highscore: 0,
   secondsRemaining: null,
};

const pointsSlice = createSlice({
   name: 'points',
   initialState,
   reducers: {
      setSecondsRemaining(state, action) {
         state.secondsRemaining = action.payload;
      },

      updatePoints(state, action) {
         state.points = action.payload;
      },

      resetPoints(state) {
         state.points = 0;
      },

      resetHighscore(state) {
         state.highscore = 0;
      },

      saveHighscore(state, action) {
         state.points > state.highscore
            ? (state.highscore = action.payload)
            : state.highscore;
      },
   },
});

export const {
   setSecondsRemaining,
   resetPoints,
   resetHighscore,
   saveHighscore,
   updatePoints,
} = pointsSlice.actions;

export default pointsSlice.reducer;

export const getMaxPossiblePoints = (state) =>
   state.questions.questions.reduce((prev, cur) => prev + cur.points, 0);
