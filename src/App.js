import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Landingpage from './components/Landingpage';
import Profilepage from './components/Profilepage';
import Post from './components/Post';
import Gallery from './components/Gallery';
import Todo from './components/Todo';
import "./App.css"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/profile/:id' element={<Profilepage/>}/>
      <Route path='/post' element={<Post/>}/>
      <Route path='/gallary' element={<Gallery/>}/>
      <Route path='/todo' element={<Todo/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
