import React, { useRef, useEffect, useState } from 'react'
import './slider.scss'
import { motion } from 'framer-motion'
import images from '../../Assets/data/dataSlider'

const Slider = () => {

  const [width, setWidth] = useState(0);
  const slider = useRef();

  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, [])

  return (
    <div className='carousel'>
      <motion.div
        ref={slider}
        className="slider"
      >
        <h1>
          AI
        </h1>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className='inner-slider'>
          {images.map(image => {
            return (
              <motion.div className='item' key={image} 
              whileTap={{ cursor: "grabbing" }}>
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      
          
      </motion.div>

    </div>
  )
}

export default Slider