export function Button({ type, onClick, className }) {
   // Start button
   if (type === 'start')
      return (
         <button onClick={onClick} className={className}>
            <span className="pr-2">Start</span>
            <span> &rarr;</span>
         </button>
      );

   // Next button
   if (type === 'next')
      return (
         <button onClick={onClick} className={className}>
            Next
         </button>
      );

   // Finish button
   if (type === 'finish')
      return (
         <button onClick={onClick} className={className}>
            Finish
         </button>
      );

   // Exit button
   if (type === 'exit')
      return (
         <button onClick={onClick} className={className}>
            X
         </button>
      );

   // Reset Highscore button
   if (type === 'reset')
      return (
         <button onClick={onClick} className={className}>
            Reset Highscore
         </button>
      );

   // Restart button
   if (type === 'restart')
      return (
         <button onClick={onClick} className={className}>
            Restart
         </button>
      );

   // Back to Start Screen button
   if (type === 'backToStart')
      return (
         <button onClick={onClick} className={className}>
            Back to Start Screen
         </button>
      );
}
