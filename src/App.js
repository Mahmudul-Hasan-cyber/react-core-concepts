import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const nayoks = ["Jasim", "DeepJol", "BappaRaz"]
  return (
    
    <div className="App">
      <header className="App-header">
        <MovieCounter></MovieCounter>
      <Nayok name = {nayoks[0]}></Nayok>
      <Nayok name = {nayoks[1]}></Nayok>
      <Nayok name = {nayoks[2]}></Nayok>
      <Nayok></Nayok>
      </header>
    </div>
  );
}

function MovieCounter() {
  const [count, setCount] = useState(0)
  const handleClick = () => setCount(count + 1)
    return(
      <div>
        <button onClick ={handleClick}>add Movie </button>
    <h5>Number of Movie:{count}</h5>
      </div>
    )
}
function Nayok (props) {
  const nayokStyle = {
    border: '2px solid purple',
    borderRadius: '10px',
    margin: '20px'
  }
  return (
    <div style ={nayokStyle}>
      <h1>Ami Nayok: {props.name}</h1> 
      <h3> ami valo kaj kori</h3>
    </div>
  )
}
export default App;
