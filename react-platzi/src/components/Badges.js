import React from 'react'
import ReactDOM from 'react-dom'
import BadgesImg  from '../assets/badge-header.svg'
import Person from '../assets/perso.png'
import Bandera from '../assets/bandera.png'
import "../styles/Badges.css"

class Badges extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="header">
          <img className="badges__image__header" src={BadgesImg} alt="badges-header" />
        </div>
        <div className="badges__main">
          <div className="badges__main_content">
            <img className="badges__main__img" src={Person} alt="persona" />
          </div>
          <div> 
            <h1 className="badges__main__text">{this.props.name} <br />
                {this.props.lastName}
            </h1>
          </div>
        </div>
        <div className="badges__description">
          <p>{this.props.jobTitle}<br />
              {this.props.twitter} 
              <img className="description_img" src={Bandera} alt="bandera" />
          </p>
        </div>
        <div className="footer">
          <p className="footer__text">Platzi Conf</p>
        </div>
      </div>
    )
  }
}

export default Badges;