import React, { useContext, useState } from 'react'
import '../Render/render.scss'
import { SectionContext } from '../../../context/Contex'
import { NavLink } from 'react-router-dom'


export const Render = () => {
    const {state} = useContext(SectionContext)
    const [render2 ,setRender2] = useState(1)

  return (
    <div>
        <NavLink onClick={() => setRender2(1)} className={render2 === 1 ? 'activen' : 'h2-title'}>Просмотренные</NavLink>
        <NavLink onClick={() => setRender2(2)}  className={render2 === 2 ? 'activen' : 'h2-title'} >Выбор редакции</NavLink>
    <div className="card-list">
        {render2 === 1 ? state.slice(16,20) : state.slice(8,12)}
    </div>
    </div>
  )
}

export default Render
