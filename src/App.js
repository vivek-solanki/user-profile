import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Landingpage from './components/Landingpage';
import Profilepage from './components/Profilepage';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/profile/:id' element={<Profilepage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
