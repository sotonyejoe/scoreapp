import { useEffect } from 'react'
import { useState } from 'react'

import './App.css'
import Chelsea from './Components/Chelsea'
import Manu from './Components/Manu'

function App() {
  const [scoremanu, setScoremanu] = useState(3);
  const [scorechelsea, setScorechelsea] = useState(0);
  const [bgColor, setBgcolor] = useState('linear-gradient(to right, black, rgb(10, 10, 61, 0.52))');

  useEffect(() => {
    if(scoremanu > scorechelsea){
      setBgcolor('linear-gradient(to right, black, rgba(160, 10, 30, 0.52))');
    }
    else if( scorechelsea > scoremanu){
      setBgcolor('linear-gradient(to right, black, rgba(24, 13, 184, 0.52))')
    }
    else{
      setBgcolor('linear-gradient(to right, black, rgb(10, 10, 61, 0.52))');
    }
  })

        const add = (num)  =>{
          return num + 1
        };
  return (
    <div className="App">
      <div className="header">
          <p>MATCH</p>
        </div>
        <p>A Friendly Match between manu and chelsea. Fatai is the Goal keeper for the manu team and He is Sleeping</p>
       <div className="App-container">
        
        <div className='match-section'>
        <Manu scoremanu={scoremanu}/>
        <Chelsea scorechelsea={scorechelsea}/>
        </div>
        <div className='the-button'>
        <button  onClick={() => setScoremanu(add(scoremanu))}>Update-M</button>
        <button className='chel-btn' onClick={() => setScorechelsea(add(scorechelsea))}>Update-M</button>
        
        </div>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      </div>
     </div>
    </div>
  )
}

export default App
