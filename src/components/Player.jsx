import React from 'react'
import '@styles/Players.scss'

const Player = ({player}) => {
  return (
   <div className="Players" >
    <div className="photo--number">
     <div className="tab"></div>
     <div className="number">{player.number}</div>
     <img src={player.photo} alt="" />
    </div>
    <div className="info">
     <div>
      <ul>
          <li>
            <b>Age:</b> <span>{player.age}</span> 
          </li>
          <li>  
            <b>Position:</b> <span>{player.position}</span>
          </li>
      </ul>
      <h3>{player.name}</h3>
     </div>
    </div>   
  </div>
  )
}

export default Player