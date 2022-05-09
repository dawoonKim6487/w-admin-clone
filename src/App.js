import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home'
import News from './pages/news'


function App() {
  return (
    <div className="App h-screen">
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/board/*' element={<Home />}>
          <Route path=':mode'></Route>
        </Route>

        <Route path='/page1' element={<News />} />
        <Route path='/page2' element={<News />} />
        <Route path='/page3' element={<News />} />
        <Route path='/page4' element={<News />} />
        <Route path='/page5' element={<News />} />
        <Route path='/page6' element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
