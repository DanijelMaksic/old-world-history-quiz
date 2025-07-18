import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from './features/questions/questionsSlice';
import pointsReducer from './features/points/pointsSlice';

const store = configureStore({
   reducer: {
      questions: questionsReducer,
      points: pointsReducer,
   },
});

export default store;
