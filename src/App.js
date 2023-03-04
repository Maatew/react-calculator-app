import './App.css';
import Button from './components/button';
import Clear from './components/clear';
import Display from './components/display';
import logo from './images/logo-1.png';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const result = () => {
    if (input){
      setInput(evaluate(input));
    }else{
      alert("Please put the numbers for made the operations.");
    }    
  };

  return (
    <div className='App'>
      <div className='logo-container'>
        <img 
          className='my-logo'
          src={logo} 
          alt="My Logo" />        
      </div>
      <div className='container-calculator'>
        <Display inputDisplay={input} />
        <div className='row'>
          <Button doClick={addInput}>1</Button>
          <Button doClick={addInput}>2</Button>
          <Button doClick={addInput}>3</Button>
          <Button doClick={addInput}>+</Button>               
        </div>  
        <div className='row'>
          <Button doClick={addInput}>4</Button>
          <Button doClick={addInput}>5</Button>
          <Button doClick={addInput}>6</Button>
          <Button doClick={addInput}>-</Button>               
        </div>
        <div className='row'>
          <Button doClick={addInput}>7</Button>
          <Button doClick={addInput}>8</Button>
          <Button doClick={addInput}>9</Button>
          <Button doClick={addInput}>*</Button>               
        </div>
        <div className='row'>
          <Button doClick={result}>=</Button>
          <Button doClick={addInput}>0</Button>
          <Button doClick={addInput}>.</Button>
          <Button doClick={addInput}>/</Button>               
        </div>
        <div className='row'></div>
          <Clear doClear={() => setInput('')}>
            Clear
          </Clear>
      </div>      
    </div>
  );
}

export default App;
