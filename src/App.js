import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './pages/Index';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

function App() {

  // react router dom을 이용하여 링크에 변화가 생길때마다 그에 맞는 페이지를 보여주게끔 설정
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/signup' element={<Signup />}/>
    </Routes>
  );
}

export default App;
