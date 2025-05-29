import { useState } from 'react'
import { Routes , Route} from 'react-router-dom';
import './App.css'
import Homepage from './pages/Homepage';
import Game from './pages/Game';

function App() {

  return (
   <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/Game' element={<Game />}></Route>
   </Routes>
    
  )
}

export default App;
