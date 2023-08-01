import React from 'react'
import '../section2/section2.scss'
import { Link } from 'react-router-dom'


export const Section2 = ({img,title,price,id}) => {
  return (
    <div className='container'>
     <Link to={`/product/${id}`} className='product-link'>
     <div className="card-menu">
       <img className='img' src={img} alt="photo" />
        <h4>{title}</h4>
        <p className='time'>Вчера 22:55</p>
        <h2>{price}$</h2>
       </div>
     </Link>
    </div>
  )
}

export default Section2
