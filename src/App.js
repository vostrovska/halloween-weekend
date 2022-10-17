
import './App.css';
import {useEffect, useState} from "react";

function App() {

  const [advice, setAdvice] = useState("");

  useEffect(()=>{
    getAdvice();
  }, [])

  const getAdvice = async() =>{
    const response = await fetch("http://www.boredapi.com/api/activity")
    const data = await response.json();
    setAdvice(data.activity)
  }

  return (
    <div >
      <div className="App">
        <h1>What to do on Halloween Weekend?</h1>
      </div>
      <div className="App">
        <p>{advice}</p>
      </div>
      <div className="App">
        <button className='btn' onClick={getAdvice}>More Advice</button>
      </div>
    </div>
  );
}

export default App;
