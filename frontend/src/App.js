import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import Homepage from './Pages/Homepage';
import Success from './Pages/Success';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/success' element={<Success />}/>
          <Route path='*' element={<Navigate replace to="/"/>}></Route>   
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
