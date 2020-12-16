import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
    <div className="App">
     
        <Dinner dishName="Biryani" complimentary="Coke"/>
        <hr/>
        <Dinner dishName="Tikka" complimentary="Pepsi"/>
        <hr/>
        <Dinner dishName="Karahi" complimentary="Fanta"/>
 
    </div>
  );
}

export default App;
