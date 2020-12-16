import React from 'react';
import Dinner from './dinner.js';
import './App.css';

function App() {
  return (
    <div className="App">
     
        <Dinner dishName="Biryani" complimentary="Coke"/>
        <hr/>
        <Dinner dishName="Tikka" complimentary="Sprite"/>
        <hr/>
        <Dinner dishName="Karahi" complimentary="Fanta"/>
 
    </div>
  );
}

export default App;
