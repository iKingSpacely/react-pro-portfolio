import React from 'react'
import './style.css'
import videoBg from '../../assets/videoBg.mp4'
import Typewriter from "typewriter-effect";
// import About from '../About'



export default function Home() {
  return (
    <div className="home">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
      <Typewriter 
        onInit={(typewriter) => {
          typewriter
          .typeString("Welcome To...")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Adam Colin's Portfolio")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Click a Tab to Browse...")
          .pauseFor(1000)
          .start();
        }}
        />
      </div>
    </div>

  )
}

//how to i get my About page to display after the above typerwriter? - ask tutor
// i dont want this page to scroll...how to i remove that random grey area right before the footer?