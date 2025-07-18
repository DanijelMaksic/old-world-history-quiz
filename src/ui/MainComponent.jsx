function MainComponent({ children }) {
   return (
      <div className="bg-game-art bg-cover">
         <div className="w-1/2 min-h-screen flex flex-col gap-6 mx-auto text-neutral-700 bg-gray-50 items-center justify-between">
            {children}
         </div>
      </div>
   );
}

export default MainComponent;
