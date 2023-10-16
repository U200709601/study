import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Note from './pages/Note';

export default function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Note' element={<Note/>}/>
    </Routes>
  );
}
