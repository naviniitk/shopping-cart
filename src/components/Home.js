import React from 'react';
import Background from '../utils/homepage/benhome.png'
const Home = () => {

  const style = {
    width: "100%",
    height: "100vh",
    backgroundImage: "url(" + Background + ")"
  }
  return (
    <div style={style}>
      Home
    </div>
  )
}

export default Home;
