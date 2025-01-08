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
              <p> In the modern landscape of real-time technology, 
              the demand for instantaneous data processing has revolutionized industries across the globe.
               From financial markets reacting to split-second changes in stock values to smart 
               city infrastructures optimizing traffic flow on the fly, the ability to respond in real 
               time has become a cornerstone of innovation. Real-time analytics is particularly
                transformative in sports, where platforms capture live game data, process it within
                 milliseconds, and provide actionable insights for teams and fans alike. This paradigm 
                 shift not only enhances decision-making but also redefines user experiences, setting 
                 the stage for a future where every moment counts.</p>
          </div>
      </div>
  )
  }
}

export default RealTimeAnalysis