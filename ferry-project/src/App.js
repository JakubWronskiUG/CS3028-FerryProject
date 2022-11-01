import React from 'react';
import './styles/App.css';
import TextInput from './components/Text';

function App() {
  return (
    <div className="App">
      <div>
      <h1>Ferry App</h1>
      </div>
      <h2>Enter departure port:</h2>
      <TextInput/>
      <h2>Enter arrival port:</h2>
      <TextInput/>
    </div>
  );
}

export default App;
