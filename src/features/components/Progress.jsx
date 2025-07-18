import { useSelector } from 'react-redux';
import { getMaxPossiblePoints } from '../points/pointsSlice';

function Progress() {
   const { index, answer, questions } = useSelector((state) => state.questions);
   const { points } = useSelector((state) => state.points);

   const numQuestions = questions.length;
   const maxPossiblePoints = useSelector(getMaxPossiblePoints);

   return (
      <header className="my-3">
         <progress
            max={numQuestions}
            value={index + Number(answer !== null)}
            className="w-full [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-full   [&::-webkit-progress-bar]:bg-gray-300 [&::-webkit-progress-value]:bg-red-500 [&::-moz-progress-bar]:bg-violet-400"
         />
         <div className="flex justify-between">
            <p>
               Question <strong>{index + 1}</strong> / {numQuestions}
            </p>
            <p>
               <strong>{points}</strong> / {maxPossiblePoints} points
            </p>
         </div>
      </header>
   );
}

export default Progress;
