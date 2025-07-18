import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { exitQuiz, loadNextQuestion } from '../questions/questionsSlice';
import { resetPoints, saveHighscore } from '../points/pointsSlice';

import Progress from './Progress';
import Question from './Question';
import Timer from './Timer';
import { Button } from '../../ui/Button';
import QuestionFooter from '../../ui/QustionFooter';

function ActiveContent() {
   const dispatch = useDispatch();

   const { index, answer, questions } = useSelector((state) => state.questions);

   const { points } = useSelector((state) => state.points);

   const numQuestions = questions.length;

   return (
      <>
         <Link to="/">
            <Button
               type="exit"
               onClick={() => {
                  dispatch(exitQuiz());
                  dispatch(resetPoints());
               }}
               className="transition absolute top-9 right-[-3.6rem] bg-gray-200 rounded-full px-4 py-2 hover:bg-gray-300"
            />
         </Link>

         <Progress />
         <Question />
         <QuestionFooter>
            <Timer />

            {index < numQuestions - 1 && answer !== null && (
               <Button
                  type="next"
                  onClick={() => {
                     dispatch(loadNextQuestion());
                  }}
                  className="bg-gray-200 w-min self-end px-6 py-2 rounded-full animate-appear hover:bg-gray-300"
               >
                  Next
               </Button>
            )}

            {index === numQuestions - 1 && answer !== null && (
               <Link to="/finished">
                  <Button
                     type="finish"
                     onClick={() => dispatch(saveHighscore(points))}
                     className="bg-gray-200 px-6 py-2 rounded-full hover:bg-gray-300 transition animate-appear"
                  >
                     Finish
                  </Button>
               </Link>
            )}
         </QuestionFooter>
      </>
   );
}

export default ActiveContent;
