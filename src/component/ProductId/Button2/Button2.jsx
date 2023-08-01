import React from 'react'
import '../Button2/button2.scss'

export const Button2 = ({text2,color}) => {
  return (
    <div>
      <button  className={`btn3 ${color}`}>{text2}</button>
    </div>
  )
}

export default Button2
