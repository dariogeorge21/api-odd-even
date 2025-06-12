import './App.css'
import './index.css'
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [oddStatus, setOddStatus] = useState<null | {
    number: number;
    odd: boolean;
  }>(null);
  const [ErrorMessage, setErrorMessage] = useState('');

  const checkOdd = async () => {
  setErrorMessage('');
  setOddStatus(null);

  try{
    const mynumber = parseInt(inputValue);
    if (Number.isNaN(mynumber)){
      throw new Error("Please enter a valid number");
    }else if (mynumber < 0) {
      throw new Error("Please enter a positive number");
    }
    const response = await fetch(`https://is-odd-api.mewtru.com/v1/numbers/${mynumber}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data from the API");
    }
    const data = await response.json();
    setOddStatus({
      number: data.number,
      odd: data.odd
    });
    setInputValue(''); 
    
  } catch (error) {
    if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unknown error occurred");
      }
  }
}

  return (
    <>
      <div className='formContainer'>
        <h2 className='heading'>Is is Odd?</h2>
        <p>Enter number and checks its oddness!!</p>
        <br />
        <p className='inputRequest'>Your Number:</p>
        <input
        type='number'
        className='inputField'
        placeholder='Enter a number'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}/>
        <br />
        <button className='checkButton' onClick={checkOdd}>Check</button>
        <br />
        <p className='result'>
          {oddStatus && `The number ${oddStatus.number} is ${oddStatus.odd ? 'Odd' : 'Even'}`}
        </p>

        {ErrorMessage && <p className='errorContainer'>Error: {ErrorMessage}</p>}

      </div>
    </>
  )
}

export default App
