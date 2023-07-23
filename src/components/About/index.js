import React from 'react'
import './style.css'

export default function About() {
  return (
    <div className="box">
      <h1 class="about-title">My name is Adam Colin and here's a little about me...</h1>
        <br></br>
          <h2 className="about-h2">College & Career Beginnings</h2>
            <p className="about-body">I graduated cum laude from DePaul University in 2016 with a Bachelors in Communciations. I majored in Public Relations & Advertising and minored in Marketing. From there, I promptly started a career at Publicis, known for being recognized as one of the "Big Three" media agencies in the world. Started out as a trainee on the Oracle Strategy team and migrated to the MolsonCoors National Strategy Team for Miller Lite. My team handled full funnel media strategy and budgets to not only satisfy the clients needs, but fulfill their ultimate goal, maximizing profits.</p>
        <br></br>
          <h2 className="about-h2">Twitch Life Turned Amazon</h2>
            <p className="about-body">After 2 years enduring the rigorous hours and demands of the media agency life, I moved to the publisher side at a little company named Twitch, essentially a videogame live streaming platform. When I first started we were a separate entity than Amazon, but before long, we were fully integrated into the Amazon Workflow. I started out as a Client Strategist, essentially doing very similar work as my previous career path, but for a multitude of clients and focusing on how to integrate each brand authentically onto the Twitch platform. After 3 years, I was promoted to Client Strategy Manager, which is actually a sales-focused role. I went from working soley on the strategy for other sellers in the background to leading the charge with my own team and being the face of these strategies that we created. Needless to say, I was extremely proud of not only the quality of these strategies, but the amount of new business I personally brought into our small Midwest regions' book of business.</p>
        <br></br>
          <h2 className="about-h2">Time for a Change...</h2>
            <p className="about-body">After nearly 5 years, 8 total working in advertising, I decided that it was time for a change and a new challenge. I wanted to able to create and be a part of creating something. Not just take someone elses work and present it. This led me to the Northwestern Full Stack Development program through UEX. This course has been instrumental for me to be able to create the site you're looking at right now. Learning everything from basic HTML, CSS, JS to React, MERN, etc. As this course concludes, I can't wait to start a career doing something that I be genuinely proud of with my peers.</p>
        <br></br>
          <h2 className="about-h2">How About Some Fun Stuff?</h2>
            <ul className="about-list">
              <li>Enjoyer of all-things sports related, specifically Bulls, Blackhawks, and Bears</li>
              <li>Lover of videogames (FPS, RTS, MMORPG's, you name it)</li>
              <li>I like to read anything from fantasy to educational books around finance and real-state</li>
              <li>EI enjoy hanging out with my friends, family, and my girlfriend. Going out to restaurants, taking vacations (when we can) and even just enjoying each others presence.</li>
            </ul>
    </div>
  )
}

// add a headshot in between the title and the first h2