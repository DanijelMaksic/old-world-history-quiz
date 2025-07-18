import { motion } from 'motion/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAnswer } from '../questions/questionsSlice';
import { updatePoints } from '../points/pointsSlice';

function Question() {
   const dispatch = useDispatch();

   const { questions, answer, index } = useSelector((state) => state.questions);
   const { points } = useSelector((state) => state.points);

   const hasAnswered = answer !== null;
   const question = questions[index];

   return (
      <>
         <h4 className="text-center font-bold text-2xl">{question.question}</h4>
         <div className="flex flex-col gap-6">
            {question.options.map((option, index) => (
               <motion.button
                  key={option}
                  whileHover={hasAnswered ? null : { x: 20 }}
                  disabled={hasAnswered}
                  onClick={() => {
                     dispatch(selectAnswer(index));
                     if (index === question.correctOption) {
                        dispatch(updatePoints(points + question.points));
                     } else {
                        points;
                     }
                  }}
                  className={`bg-gray-200 rounded-full py-2 text-start text-lg px-6 hover:bg-gray-300 ${
                     index === answer ? 'ml-8' : ''
                  } ${
                     hasAnswered
                        ? index === question.correctOption
                           ? 'bg-green-500 text-gray-50 hover:bg-green-500'
                           : 'bg-red-500 text-gray-50 hover:bg-red-500'
                        : ''
                  }`}
               >
                  {option}
               </motion.button>
            ))}
         </div>
      </>
   );
}

export default Question;
