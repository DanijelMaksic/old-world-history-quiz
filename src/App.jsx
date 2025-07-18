import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StartScreen from './pages/StartScreen';
import ActiveScreen from './pages/ActiveScreen';
import FinishScreen from './pages/FinishScreen';
import PageNotFound from './pages/PageNotFound';

import MainComponent from './ui/MainComponent';
import Header from './ui/Header';
import Footer from './ui/Footer';
import ActiveContent from './features/components/ActiveContent';
import StartContent from './features/components/StartContent';

function App() {
   return (
      <BrowserRouter>
         <MainComponent>
            <Header />
            <Routes>
               <Route
                  path="/"
                  element={
                     <StartScreen>
                        <StartContent />
                     </StartScreen>
                  }
               />
               <Route
                  path="active"
                  element={
                     <ActiveScreen>
                        <ActiveContent />
                     </ActiveScreen>
                  }
               />
               <Route path="finished" element={<FinishScreen />} />
               <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
         </MainComponent>
      </BrowserRouter>
   );
}

export default App;
