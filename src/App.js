import { useEffect, useState } from 'react';
import './App.css';
import Wordle from './Components/Wordle';

function App() {

  const [solution,setSolution] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/solutions').then(resquest => resquest.json()).then(json =>{
      const randomSolution = json[Math.floor(Math.random()*json.length)]
      setSolution(randomSolution.word)
    })
  },[setSolution])

  return (
    <div className="App">
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution}/>}
    </div>
  );
}

export default App;
