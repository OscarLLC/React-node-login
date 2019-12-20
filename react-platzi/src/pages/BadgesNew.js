import React from 'react';
import Nabvar from '../components/Nabvar';
import Hero from '../components/Hero';
import "../styles/BadgesNew.css";

class BadgesNew extends React.Component{
  render(){
    return(
      <div>
        <Nabvar />
        <Hero />
      </div>
    )
  }
}

export default BadgesNew;