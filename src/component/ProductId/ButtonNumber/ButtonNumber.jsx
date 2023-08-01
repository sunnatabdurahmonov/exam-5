import React, { useState } from 'react'
import '../ButtonNumber/buttonnumber.scss'


export const ButtonNumber = () => {
    const [number,setNumber] = useState(false);


    const handleNumber = () => {
        setNumber(!number)
    }
  return (
    <div>
      <div className="numberBtn">
        <button  className='telBtn'>{number ? '99891 166 6666' : '99891 166 ****'}</button>
        <button onClick={handleNumber}  className='telBtn2'>{number ? 'скрыть номер' : 'Покозать польностю'}</button>
      </div>
    </div>
  )
}

export default ButtonNumber
