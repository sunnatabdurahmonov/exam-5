import React from 'react'
import '../footer/footer.scss'
import kiwiGray from '../../assest/kiwiGray.svg'
import {Button1} from '../button/Button1'
import apple from '../../assest/apple.svg'
import playMarket from '../../assest/playmarket.svg'
import { NavLink } from 'react-router-dom'


export const Footer = () => {
    
  return (
    <div>
        <footer>
            <div className="container">
           <div className="footer-menu">
            <div className="kiwi-gray">
                <img src={kiwiGray} alt="logo" />
                <h4 className='kiwi-img-title kiwiGray-title'>Продай, найди, купи все что пожелаешь…</h4>
            </div>
            <div className="footer-item">
                <p className='item-1'>Веб сайт бесплатных обьявлений | на базе имеется 234 944 999 шт обяления</p>
            </div>
            <div className="footer-btn">
      <NavLink to='https://www.apple.com/store' className='btn-link'>
      <Button1
               btnImg={apple}
               btnText='Available on the'
               btnTitle='Apple Store'
        />
      </NavLink>
        <NavLink to='https://play.google.com/store/apps?hl=ru&gl=US&pli=1' className='btn-link'>
        <Button1
               btnImg={playMarket}
               btnText='Android App on'
               btnTitle='Google Play'
        />
        </NavLink>
            </div>
           </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
