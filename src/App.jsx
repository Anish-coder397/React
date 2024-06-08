import './App.css';
import React from 'react';
import Home from './Pages/Home';
import Mobile from './Pages/Mobile';
import Stateclass from './Pages/Stateclass';


function App() {
  return (
    <><h1>Hello React</h1>
    <Home name = "ANISH" age = "32"/>
    <Mobile mname = "iphone"/>
    <Stateclass/>
    </>
  );
}

export default App;
