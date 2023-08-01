import React from 'react'
import '../section3/section3.scss'
import img from '../../../assest/section3Img.png'
import img2 from '../../../assest/section3Img2.png'
import img3 from '../../../assest/section3Img3.png'

export const Section3 = () => {
  return (
    <div className='container'>
        <div className="section3-img-menu">
            <img src={img} alt="photo" />
            <img src={img2} alt="photo" />
            <img src={img3} alt="photo" />
            <img src={img} alt="photo" />
            <img src={img2} alt="photo" />
            <img src={img3} alt="photo" />
        </div>
    </div>
  )
}

export default Section3
