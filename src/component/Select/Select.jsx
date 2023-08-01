import React from 'react'
import './select.scss'
import { PlusOutlined } from '@ant-design/icons'

export const Select = () => {
  return (
    <div className="select-flex">
          <div className='select'>
            <div className="select-menu">
            <select className='select-1'>
                <option>Любая категория</option>
                <option>Любая категория</option>
                <option>Любая категория</option>
                <option>Любая категория</option>
            </select>
            <h4 className='select-title'>Что будем искать ?</h4>
            <select className='select-2'>
                <option>ЛПо всей Узбекистану</option>
                <option>Любая категория</option>
                <option>Любая категория</option>
                <option>Любая категория</option>
            </select>
        </div>
        <button className='select-btn'>Найти</button>
    </div>
    <div className="div">
       <PlusOutlined className='icons plus-icon' />
        <button  className='Поднять plus'>Добавить обьявления</button>
        </div>
    </div>



  )
}

export default Select
