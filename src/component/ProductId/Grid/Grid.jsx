import React from 'react'
import '../Grid/grid.scss'

export const Grid = () => {
  return (
 <div className="grid-list">
       <div className='grid-container'>
      <div className="grid1">
        <p>Количество комнат:</p>
        <p>6</p>
      </div>
      <div className="grid1">
        <p>Общая площадь:</p>
        <p>40 м2</p>
      </div>
      <div className="grid1">
        <p>Этаж:</p>
        <p>32</p>
      </div>
      <div className="grid1">
        <p>Этажность дома:</p>
        <p>6</p>
      </div>
      <div className="grid1">
        <p>Состояние квартиры:</p>
        <p>Первая сдача </p>
      </div>
      <div className="grid1">
        <p>Этаж:</p>
        <p>32</p>
      </div>
      <div className="grid1">
        <p>Планировка</p>
        <p className='blue2'> Раздельная</p>
      </div>
      <div className="grid1">
        <p>Год постройки сдачи</p>
        <p className='blue2'>Сдача в 2017</p>
      </div>
      <div className="grid1">
        <p>Ремонт</p>
        <p>Авторский проект</p>
      </div>
      <div className="grid1">
        <p>Санузел</p>
        <p className='blue2'>2 санузла и более</p>
      </div>
      <div className="grid1">
        <p>Меблирована</p>
        <p className='blue2'>Да</p>
      </div>
      <div className="grid1">
        <p>Высота потолков</p>
        <p>32</p>
      </div>
    </div>
    <p className='info'>Рядом есть</p>
    <p className='blue2 blue-link'>Больница, поликлиника, Детская, площадка, Детский сад, Остановки, Парк, зелёная зона, Развлекательные заведения, Рестораны, кафе	</p>
 </div>
  )
}

export default Grid
