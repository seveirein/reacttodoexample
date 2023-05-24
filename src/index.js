import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './components/board';
import DumbComponent from './components/dumbComponent';
import MyUseEffect from './components/myUseEffect';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Board></Board>  
    <DumbComponent></DumbComponent>     
    <MyUseEffect></MyUseEffect>
  </React.StrictMode>
);