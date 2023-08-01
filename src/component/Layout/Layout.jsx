import React from 'react'
import '../Layout/layout.scss'
import { Header } from '../header'



const Layout = ({children}) => {
  return (
    <div className="layout">
            <Header/>
               <div className='children'>
               {children}
               </div>
        </div>
  )
}

export default Layout
