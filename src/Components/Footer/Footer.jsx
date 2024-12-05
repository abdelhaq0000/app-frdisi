import React from 'react'
import puma from '../../Assets/sponsor/log_suptech.png'
import bmw from '../../Assets/sponsor/logoFrdisi.png'
import konami from '../../Assets/sponsor/konami.png'
import emirates from '../../Assets/sponsor/logo sup envi.png'
import './footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-wrapper'>
        <h2>Partners</h2>
        <div className="pngs">
          <img src={puma} alt="" />
          <img src={bmw} alt="" />
          <img src={emirates} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer