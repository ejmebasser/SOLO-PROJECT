//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import StockRow from '../component/StockRow.js';

function App() {
  return (
    <body>
      <form>
        <div calss='input-row'>
          <label for='stock'>Stock Name</label>
          <input type='text' name='stock' id='stock' />
        </div>
        <button>Submit</button>
      </form>
      <div className='App'>
        <div className='container'>
          <table className='table'>
            <thead>
              <tr>
                <th>Ticker</th>
                <th>Price</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <StockRow ticker='aapl' />
            </tbody>
          </table>
      </div>
      </div>

    </body>
  );
}

export default App;
