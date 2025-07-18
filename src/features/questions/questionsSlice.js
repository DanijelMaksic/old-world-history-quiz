import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   questions: [],
   answer: null,
   index: 0,
   selectedNumber: null,
   difficulty: 'easy',
};

const questionsSlice = createSlice({
   name: 'questions',
   initialState,
   reducers: {
      setQuestions(state, action) {
         state.questions = action.payload;
      },

      startQuiz(state) {
         state.questions = state.questions.slice(0, state.selectedNumber + 1);
      },

      selectNumberOfQustions(state, action) {
         state.selectedNumber = action.payload;
      },

      selectDifficulty(state, action) {
         state.difficulty = action.payload;
      },

      selectAnswer(state, action) {
         state.answer = action.payload;
      },

      exitQuiz(state) {
         state.index = 0;
         state.answer = null;
         state.selectedNumber = 0;
         state.difficulty = 'easy';
      },

      restartQuiz(state) {
         state.index = 0;
         state.answer = null;
         state.selectedNumber = 0;
         state.questions.slice(0, state.selectedNumber + 1);
      },

      loadNextQuestion(state) {
         state.index = state.index + 1;
         state.answer = null;
      },
   },
});

export const {
   startQuiz,
   setQuestions,
   selectDifficulty,
   selectAnswer,
   exitQuiz,
   restartQuiz,
   loadNextQuestion,
   selectNumberOfQustions,
} = questionsSlice.actions;

export default questionsSlice.reducer;
