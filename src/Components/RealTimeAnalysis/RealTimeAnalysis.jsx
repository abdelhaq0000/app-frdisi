import React from 'react'
import './RealTimeAnalysis.scss'
import realtime from '../../Assets/RealTime/realtime.gif'
import curvasud1 from '../../Assets/home/curvasud1.png'
import curvasud from '../../Assets/home/curvasud.jpg'
import scudetto from '../../Assets/home/scudetto.jpg'
import champions from '../../Assets/home/champions.jpg'
import { Component } from 'react'

export class RealTimeAnalysis extends Component {
  render() {
    return (
      <div className='home'>
          <div className="home-wrapper">
              <img src={realtime} alt="" />
              <p> <span>San Siro</span> Stadium is the beating heart of AC Milan.
                  For fans, it's a sacred space where their love for the club
                  comes to life. It's not just a stadium; it's a symbol of
                  assion, unity, and a shared sense of belonging. It's where
                  the Rossoneri spirit thrives, and every match is a celebration
                  of their unwavering devotion to AC Milan.
                  San Siro isn't just a sporting venue; it's a canvas on which
                  the drama of AC Milan's matches unfolds. It's where dreams take
                  shape and where legends are born. It's where the spirit of the
                  Rossoneri comes alive, and every goal, every save, and every
                  triumph or setback is etched into the collective
                  memory of the fans.</p>
          </div>
      </div>
  )
  }
}

export default RealTimeAnalysis