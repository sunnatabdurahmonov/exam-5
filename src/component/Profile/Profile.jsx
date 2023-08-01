import React from 'react'
import { Select } from '../Select'
import '../Profile/profile.scss'
import { NavLink, Outlet } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons'
import { Footer } from '../footer'

export const Profile = () => {
  return (
   <>
    <div className='container profil-container'>
        <Select/>
      <div className="profil-text-menu">
      <h4 className='temirov'>Здравствуйте Зухриддин Темиров</h4>

     <div className="btn-profil">
     <p>Ваш счет: 2 3000 сум</p>
     <div className="div">
       <PlusOutlined className='icons' />
        <button  className='Поднять'>Пополнить</button>
        </div>
     </div>

      </div>
       <div className="profil-link-menu">
       <NavLink to='/profile'  className='profil-link'>Объявления</NavLink>
        <NavLink to='/profile/xabarlar' className='profil-link'>Сообщения</NavLink>
        <NavLink to='/profile/hisob' className='profil-link'>Платежи и счёт</NavLink>
        <NavLink to='/profile/sozlamalar' className='profil-link'>Настройкa </NavLink>
        <NavLink to='/profile/biznes' className='profil-link'> Мой бизнес</NavLink>
       </div>
     <div className="table">
     <Outlet/>
     </div>
    </div>
    <Footer/>

   </>
  )
}

export default Profile
