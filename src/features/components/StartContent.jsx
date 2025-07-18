import { useDispatch, useSelector } from 'react-redux';
import { useFetchQuestions } from '../questions/useFetchQuestions';
import {
   selectDifficulty,
   selectNumberOfQustions,
   startQuiz,
} from '../questions/questionsSlice';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button';

function StartContent() {
   const dispatch = useDispatch();

   const { questions, selectedNumber, difficulty } = useSelector(
      (state) => state.questions
   );

   useFetchQuestions();

   return (
      <div className="font-bold flex flex-col gap-10 items-center mb-32">
         <h3 className="text-xl rounded-md text-center mx-20 bg-gray-200 py-2 px-3 mb-4">
            History of the Old World spans the time period between the first
            civilization of Sumer and the Early Middle Ages. Many kingdoms and
            empires rose and fell during this period, such as Egypt, Assyria,
            Persia, Rome, Athens and Sparta. Test your knowledge of this
            fascinating age by initiating the quiz.
         </h3>
         <div className="flex gap-16">
            <div className="flex gap-2">
               {/* SELECT DIFFICULTY */}
               <label htmlFor="difficultySelectId" className="text-2xl">
                  Difficulty:
               </label>
               <div>
                  <select
                     id="difficultySelectId"
                     value={difficulty}
                     onChange={(e) =>
                        dispatch(selectDifficulty(e.target.value))
                     }
                     className="text-gray-700 px-2 py-1 rounded-md shadow-md"
                  >
                     <option value={'easy'}>Easy</option>
                     <option value={'medium'}>Medium</option>
                     <option value={'hard'}>Hard</option>
                     <option value={'mixed'}>Mixed</option>
                  </select>
               </div>
            </div>

            <div className="flex gap-2">
               {/* SELECT NUMBER OF QUESTIONS */}
               <label htmlFor="numberSelectId" className="text-2xl">
                  Number of questions:
               </label>

               <div>
                  <select
                     id="numberSelectId"
                     value={selectedNumber}
                     onChange={(e) =>
                        dispatch(selectNumberOfQustions(Number(e.target.value)))
                     }
                     className="text-gray-700 px-4 py-1 rounded-md mb-4 shadow-md"
                  >
                     {questions.map((_, index) => (
                        <option value={index} key={index}>
                           {index + 1}
                        </option>
                     ))}
                  </select>
               </div>
            </div>
         </div>

         <Link to="/active">
            <Button
               type="start"
               onClick={() => dispatch(startQuiz())}
               className="font-normal bg-red-500 py-3 px-6 rounded-full hover:bg-red-600 transition duration-75 text-neutral-50 text-3xl "
            />
         </Link>
      </div>
   );
}

export default StartContent;
