import React from 'react';
import './App.css';
import Hello from './components/Hello'
import Form from './components/Form';

function App() {
  const firstName = 'bob'
  const lastName = 'vance'

  return (
    <div className="App">
      <header className="App-header">
      <Hello firstName={firstName} lastName={lastName}/>
      <Form />
      </header>
    </div>
  );
}

export default App;
