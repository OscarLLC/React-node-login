import React from 'react'
import ReactDOM from 'react-dom'
import NabvarImg from '../assets/astronauts.svg'
import "../styles/Nabvar.css"
class Nabvar extends React.Component{
  render(){
    return(
      <div className="nabvar">
        <div className="nabvar__content">
          <img className="nabvar__img" src={NabvarImg} />
        </div>
        <div className="nabvar__content">
          <span className="nabvar__text">Conferen</span>
          <span>Badges</span>
        </div>
      </div>
    )
  }
}

export default Nabvar;