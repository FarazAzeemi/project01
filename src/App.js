import React from 'react';
import './App.css';
import './new.css';


function App({name,drinks}) {
  return (
    <div className ="myname">
      Hello world!
      Hello <strong>{name}!</strong>
      <ol>
      <h1>Soft Drinks</h1>
        <ul>
        <li>Cocacola</li>
        <li>Pepsi</li>
        <li>Sprite</li>
        <li>Fanta</li>
        </ul>
      <h1>Home Made Drinks</h1>
        <ul>
          <li>Tea</li>
          <li>Coffee</li>
        </ul>
      </ol>
      <p>Number of soft drinks ={drinks + 5}</p>
    </div>
   
  )
};

export default App;
