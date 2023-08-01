import React, { useContext, useEffect, useState } from 'react'
import '../header/header.scss'
import kiwi from '../../assest/kiwi.svg'
import { NavLink } from 'react-router-dom'
import { SectionContext } from '../../context/Contex'
import profile from '../../assest/profile.svg'

export const Header = () => {
    const {token } = useContext(SectionContext)
    const [wHeigh , setWHeigh] = useState(0)

    useEffect(() => {
        const handleScroll = (e) => {
            const header = document.querySelector('header')
            const foo = (e.target.documentElement.scrollTop);
            setWHeigh(foo)
            if (foo > 100) {
                header.style.top = '-150px';
            }else{
                header.style.top='0'
            }
        };

    window.addEventListener("scroll", handleScroll);
  }, [wHeigh]);
    
    
  return (
 <>
      <header>
            <div className='container header'>
            <NavLink to='/' className="kiwi-img-menu">
                <img src={kiwi} alt="logo" />
                <h4 className='kiwi-img-title'>Продай, найди, купи все что пожелаешь…</h4>
            </NavLink>
            <ul className='kiwi-list'>
                <li>
                    <NavLink className='kiwi-link'>Объявления</NavLink>
                </li>
                <li>
                    <NavLink className='kiwi-link'>Магазины</NavLink>
                </li>
                <li>
                    <NavLink className='kiwi-link'>Для бизнеса</NavLink>
                </li>
                <li>
                    <NavLink className='kiwi-link'> Помощь</NavLink>
                </li>
                <li>
                    <p>Рус     |    O’z</p>
                </li>
                <li>
                   {
                    token ? (
                       <NavLink to='/profile' className='profile-token'>
                        <p>Темиров</p>
                        <img src={profile} alt="logo" />
                       </NavLink>
                    ):(
                        <div>
                            <NavLink to='/login' className='kiwi-link2'>Вход | </NavLink>
                            <NavLink to='/login' className='kiwi-link2'> Регистрация</NavLink>
                        </div>
                        
                    )

                   }
                </li>
            </ul>
    </div>
        </header>
 </>
  )
}

export default Header
