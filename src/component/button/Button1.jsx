import React from 'react'
import './button.scss'


export const Button1 = ({btnImg,btnText,btnTitle}) => {
  return (
    <div>
        <button className='btn1'>
        <div className="btn-img">
        <img src={btnImg} alt="logo" />
        </div>
        <div className="btn-text">
            <p>{btnText}</p>
            <h3>{btnTitle}</h3>
        </div>
        </button>
      
    </div>
  )
}

export default Button1
