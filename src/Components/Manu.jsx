import React from 'react'
import manuimg from "../Images/manuimg.png";
import "./Manu.css";


const Manu = ({scoremanu}) => {
  return (
    <div className='manu-bg'>
      <div className="manu-logo">
      <img src={manuimg} />
      </div>
      <div className="manu-text">
      <p>{scoremanu}</p>
      </div>
    </div>
  )
}

export default Manu
