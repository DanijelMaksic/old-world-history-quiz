# Old World History - Quiz

Old World History - Quiz is a React powered app that enables the user to test their knowledge and compete for the highest score. Questions and highscore are stored in JSON files and are fetched using mock API by JSON-Server.

In order to display the questions and highscore, you need to run two JSON servers in the console:
<br />

<ul>
   <li>`npm run questions-server`</li>
   <li>`npm run highscore-server`</li>
</ul>

![quiz image](https://danijelmaksic.vercel.app/assets/quiz-BorbzWrh.webp)

## Quiz setup

Initial page shows some information about the time period to prepare the user for what's coming. There are four difficulty levels to choose from, with varying number of questions for each of them.

![quiz setup](https://danijelmaksic.vercel.app/assets/quiz-1-WA_nDqga.webp)

## Quiz page

When user is satisfied with the quiz setup, he can start the quiz. Each difficulty tier rewards a different amount of points, where highest difficulty questions net the most points. User also needs to pay attention to the timer (quiz time depends on the number of selected questions).

![quiz page](https://danijelmaksic.vercel.app/assets/quiz-2-BRWR00Vr.webp)

## Results screen

Finally, when the quiz is completed user will be navigated to the results screen, where he can see his success ratio along with the highscore.

![results screen](https://danijelmaksic.vercel.app/assets/quiz-3-CiWmT2YL.webp)
