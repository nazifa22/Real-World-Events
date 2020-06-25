import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Game from './Components/Game/Game';
import Temperature from './Components/Temperature/Temperature';
import Event from './Components/Events/Events';

function App() {
  return (
    <div className="App">
      <section>
        <Event/>
        <Game/>
        <Temperature/>
      </section>
    </div>
  );
}

export default App;
