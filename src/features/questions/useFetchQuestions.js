import { useEffect } from 'react';
import { setQuestions } from './questionsSlice';
import { useDispatch, useSelector } from 'react-redux';

export function useFetchQuestions() {
   const dispatch = useDispatch();

   const { difficulty, selectedNumber } = useSelector(
      (state) => state.questions
   );

   useEffect(
      function () {
         async function fetchQuestions() {
            try {
               const res = await fetch('http://localhost:8000/questions');
               const data = await res.json();

               if (difficulty === 'easy') {
                  dispatch(
                     setQuestions(
                        data.filter(
                           (question) => question.difficulty === 'easy'
                        )
                     )
                  );
               }

               if (difficulty === 'medium') {
                  dispatch(
                     setQuestions(
                        data.filter(
                           (question) => question.difficulty === 'medium'
                        )
                     )
                  );
               }

               if (difficulty === 'hard') {
                  dispatch(
                     setQuestions(
                        data.filter(
                           (question) => question.difficulty === 'hard'
                        )
                     )
                  );
               }

               if (difficulty === 'mixed') {
                  dispatch(setQuestions(data));
               }
            } catch (err) {
               console.log(err);
            }
         }
         fetchQuestions();
      },
      [dispatch, selectedNumber, difficulty]
   );
}
