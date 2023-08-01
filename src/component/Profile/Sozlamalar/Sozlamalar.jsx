import React, { useContext } from 'react'
import { SectionContext } from '../../../context/Contex'
import '../Sozlamalar/sozlamalar.scss'

export const Sozlamalar = () => {
    const {setToken} = useContext(SectionContext)

    const handleOut = () => {
        localStorage.removeItem('token')
        setToken(null)
    }
  return (
    <div className='log-out-menu'>
      <button className='log-out' onClick={handleOut}>Log out</button>
    </div>
  )
}

export default Sozlamalar
