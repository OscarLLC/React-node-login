import React from 'react'
import ReactDOM from 'react-dom'
import HeroImgBadges from '../assets/badge-header.svg'
import "../styles/Hero.css"


class Hero extends React.Component{
  render(){
    return(
      <div className="hero_main">
        <img className="hero__badges-header" src={HeroImgBadges} />
      </div>
    )
  }
}

export default Hero;