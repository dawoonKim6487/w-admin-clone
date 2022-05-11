import React from 'react';
import { Routes, Route } from "react-router-dom";
import Board from './pages/board'
import Home from './pages/home'
import Zoom from './pages/zoom'
import News from './pages/news'


function App() {
  return (
    <div className="App h-screen">
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/board/*' element={<Board />}>
          <Route path=':mode' />
        </Route>


        <Route path='/faq' element={<Zoom mode='faq' />}>
          <Route path=':idx' />
        </Route>

        <Route path='/support' element={<Zoom mode='support' />}>
          <Route path=':idx' />
        </Route>


        <Route path='/qna' element={<Zoom mode='qna' />}>
          <Route path=':idx' />
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
