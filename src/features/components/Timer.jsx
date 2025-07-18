import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSecondsRemaining } from '../points/pointsSlice';

function Timer() {
   const dispatch = useDispatch();
   const secondsRemaining = useSelector(
      (state) => state.points.secondsRemaining
   );
   const questions = useSelector((state) => state.questions.questions);

   const SECONDS_PER_QUESTION = 30;
   const navigate = useNavigate();
   const mins = Math.floor(secondsRemaining / 60);
   const seconds = secondsRemaining % 60;

   useEffect(() => {
      dispatch(setSecondsRemaining(questions.length * SECONDS_PER_QUESTION));
   }, [dispatch, questions, SECONDS_PER_QUESTION]);

   useEffect(() => {
      const id = setInterval(() => {
         dispatch(setSecondsRemaining(secondsRemaining - 1));
         if (secondsRemaining < 2) {
            navigate('/finished');
         } else {
            return secondsRemaining;
         }
      }, 1000);

      return () => {
         clearInterval(id);
      };
   }, [secondsRemaining, dispatch, navigate]);

   return (
      <div className="pointer-events-none border-2 border-gray-600 px-6 py-2 rounded-full hover:bg-gray-500 transition">
         {mins < 10 && '0'}
         {mins}:{seconds < 10 && '0'}
         {seconds}
      </div>
   );
}

export default Timer;
