import React from 'react'
import './style.css'
import videoBg from '../../assets/videoBg.mp4'



export default function Home() {
  return (
    <div className="home">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h1>Welcome to Adam Colin's Portfolio</h1>
      </div>
    </div>

  )
}
