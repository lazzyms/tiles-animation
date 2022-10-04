import './App.css';
import { useEffect, useState } from 'react';
import Box from './Box';

const boxCount = 6
function App() {
  const [boxState, setBoxState] = useState(Array.from(Array(boxCount), (e,i) => false));
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    if(steps.length === boxCount) {
      steps.reverse().forEach((val, i) => {
        setTimeout(() => {
          const updatedState = boxState;
          updatedState[val] = !boxState[val];
          setBoxState([...updatedState])
        }, i * 500)
        if(i === boxCount - 1) {
          setSteps([]);
        }
      })
    } 
  }, [steps])

  const handleClick = (i) => {
    const updatedState = boxState;
    updatedState[i] = !boxState[i];
    setBoxState([...updatedState])
    setSteps([...steps, i]);
    
  }

  return <div className='App'>
    {/* Add Css to arrange the box */}
    <h1>
      Click on the Boxes
    </h1>
    {boxState.map((e,i) => (<Box key={i} index={i} state={e} handleClick={handleClick}/>))}
  </div>;
}

export default App;
