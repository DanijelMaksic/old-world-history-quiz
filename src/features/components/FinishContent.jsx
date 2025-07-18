import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { exitQuiz, restartQuiz } from '../questions/questionsSlice';
import {
   getMaxPossiblePoints,
   resetPoints,
   resetHighscore,
} from '../points/pointsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../ui/Button';

function FinishContent() {
   const dispatch = useDispatch();

   const [fetchedHighscore, setFetchedHighscore] = useState();
   const { points, highscore } = useSelector((state) => state.points);

   const maxPossiblePoints = useSelector(getMaxPossiblePoints);
   const percentage = (points / maxPossiblePoints) * 100;

   async function handleResetServerHighscore() {
      try {
         const res = await fetch('http://localhost:9000/highscore', {
            method: 'PUT',
            body: JSON.stringify({ savedHighscore: 0 }),
            headers: {
               'Content-type': 'application/json',
            },
         });

         if (!res.ok) throw new Error();

         const { data } = await res.json();
         return data;
      } catch {
         throw Error('Failed to save highscore');
      }
   }

   useEffect(() => {
      async function saveHighScoreToServer(highscore) {
         try {
            if (!highscore) return;

            if (points < fetchedHighscore) {
               fetchedHighscore;
            } else {
               const res = await fetch('http://localhost:9000/highscore', {
                  method: 'PUT',
                  body: JSON.stringify({ savedHighscore: highscore }),
                  headers: {
                     'Content-type': 'application/json',
                  },
               });

               if (!res.ok) throw new Error();

               const { data } = await res.json();
               return data;
            }
         } catch {
            throw Error('Failed to save highscore');
         }
      }

      saveHighScoreToServer(highscore);
   }, [highscore, fetchedHighscore, points]);

   useEffect(() => {
      async function fetchHighScore() {
         try {
            const res = await fetch('http://localhost:9000/highscore');

            if (!res.ok) throw new Error();

            const data = await res.json();

            setFetchedHighscore(data.savedHighscore);
         } catch {
            throw Error('Failed to save highscore');
         }
      }

      fetchHighScore();
   }, []);

   return (
      <div className="flex flex-col gap-6 mb-32 items-center">
         <p className="border-b-2 border-red-300 w-90 px-6 py-3 text-2xl text-center">
            {!maxPossiblePoints ? (
               <span>Finish the quiz to see the result!</span>
            ) : (
               <span>
                  {' '}
                  You scored <strong>{points}</strong> out of{' '}
                  {maxPossiblePoints} points ({Math.ceil(percentage)}%)
               </span>
            )}
         </p>
         <div className="flex gap-6 items-center mb-4">
            <span className="text-xl">
               Highscore:{' '}
               <strong>
                  {' '}
                  {fetchedHighscore > highscore ? fetchedHighscore : highscore}
               </strong>{' '}
               points
            </span>

            <Button
               type="reset"
               onClick={() => {
                  dispatch(resetHighscore());
                  setFetchedHighscore(0);
                  handleResetServerHighscore();
               }}
               className=" px-3 py-1 transition text-lg underline hover:no-underline hover:text-gray-500"
            />
         </div>

         <div className="flex gap-6 border-t-2 pt-4 border-gray-300">
            <Link to="/active">
               <Button
                  type="restart"
                  onClick={() => {
                     dispatch(restartQuiz());
                     dispatch(resetPoints());
                  }}
                  className="w-min self-end px-6 py-2 rounded-full transition hover:bg-gray-600 bg-gray-500 text-gray-50 text-xl"
               />
            </Link>

            <Link to="/">
               <Button
                  type="backToStart"
                  onClick={() => {
                     dispatch(exitQuiz());
                     dispatch(resetPoints());
                  }}
                  className="transition bg-red-500 rounded-full px-4 text-gray-50 py-2 hover:bg-red-600 text-xl"
               />
            </Link>
         </div>
      </div>
   );
}

export default FinishContent;
