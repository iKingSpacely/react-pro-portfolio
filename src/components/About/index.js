import React from 'react'
import AboutPic from "./assets/headshot.JPG"

import './style.css'

export default function About() {
  return (
    <div className="center">
      <div class="about-header">
      <h1>My name is Adam Colin and here's a little about me...</h1>
      </div>
      <div className="image-container">
        <img src={AboutPic} alt=""></img>
      </div>
      <br></br>
      <div className="box"> 
        <p>I graduated cum laude from DePaul University in 2016 with a Bachelors in Communciations. I majored in Public Relations & Advertising and minored in Marketing. From there, I promptly started a career in Advertising at a media agency named Publicis, known for being recognized as one of the "Big Three" media agencies in the world.</p>
        <p>As I progressed through my advertising career, I ended up switching to the publisher side, joining Twitch, and Amazon owned livestreaming platform for 5 years. Moved up the ranks from Client Strategist to Manager of Client Strategy, creating media strategies for brands across every vertical you can think of. After a time, I realized that it was time for a change of scenery. I wanted to enjoy what I did and be proud of the things the things that I could create either by myself or with a team, not just take get brands/people to buy into something that already existed. This is when I decided to pursue a career in development with the help of Northwestern's Full Stack Development bootcamp. Everything you're seeing on this website is a product of that camp and I truely hope you enjoy browsing!</p>
      </div>

      <div className="box">
        <h2 className="about-h2">Some Fun Stuff</h2>
        <ul>
          <li>Enjoyer of all-things sports related, specifically Bulls, Blackhawks, and Bears</li>
          <li>Lover of videogames (FPS, RTS, MMORPG's, you name it)</li>
          <li>I like to read anything from fantasy to educational books around finance and real-state</li>
          <li>I enjoy hanging out with my friends, family, and my girlfriend. Going out to restaurants, taking vacations (when we can) and even just enjoying each others presence.</li>
        </ul>
      </div>
    </div>
  )
}