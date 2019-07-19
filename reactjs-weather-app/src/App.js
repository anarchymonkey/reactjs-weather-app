import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (

      <form action='/' method='POST'>
        <label for="queryData">
          <h1><img src={logo} alt='alt img'></img></h1>
          <input type='text' name="text" placeholder="please input a query"></input>
        </label>
      </form>
  )
}

export default App;
