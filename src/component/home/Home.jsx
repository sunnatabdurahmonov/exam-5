import React, { useContext, useEffect, useState } from 'react'
import { Section } from './section'
import { Section2 } from './section2'
import { SectionContext } from '../../context/Contex'
import { baseUrl } from '../../BaseUrl'
import axios from 'axios'
import '../home/home.scss'
import { Section3 } from './section3'
import { NavLink } from 'react-router-dom'
import { Footer } from '../footer'
import { AllAccordion } from './AllAccordion/AllAccordion'



export const Home = () => {
    const {state,setState} = useContext(SectionContext)
    const {loading,setLoading} =useContext(SectionContext)
    const [render,setRender] = useState(1)
    const [render2 ,setRender2] = useState(1)


    useEffect(() => {
        setLoading(true)
       const  getFunction = async () => {
       try {
        const res = await axios.get(`${baseUrl}`)
            const mapi = res.data.map((info) => (
                <Section2 key={info.id}
                img={info.image}
                title={info.title}
                price={info.price}
                id={info.id}
                />
               ))
               setState(mapi)
            setLoading(false)
    
       } catch (error) {
        console.error(error);
       }
        
       }
       getFunction()

       },[])
       if(loading){
        return <div className="loader loading"></div>
       }

  return (
  <>
  <div className='container'>
   <div className="home-container">
 <div className="swiper">
 <Section/>
 </div>
   <div className="nav-menu">
        <NavLink onClick={() => setRender(1)} className={render === 1 ? 'activen' : 'h2-title'}>Новые объявления</NavLink>
        <NavLink onClick={() => setRender(2)} className={render === 2 ? 'activen' : 'h2-title'}>Лучщие предложение</NavLink>
   </div>
    <div className="card-list">
    {render === 1 ? state.slice(0,16,20) :  state.slice(8,20) }
    </div>
    <AllAccordion/>
    <div className="img-list">
        <Section3/>
    </div>
    <div className="container">
        <NavLink onClick={() => setRender2(1)} className={render2 === 1 ? 'activen' : 'h2-title'}>Просмотренные</NavLink>
        <NavLink onClick={() => setRender2(2)}  className={render2 === 2 ? 'activen' : 'h2-title'} >Выбор редакции</NavLink>
        <NavLink onClick={() => setRender2(3)}className={render2 === 3 ?'activen' : 'h2-title'}>Сниженные цены</NavLink>
    <div className="card-list">
        {render2 === 1 ? state.slice(16,20) : render2 === 2 ? state.slice(12,16) : state.slice(8,12)}
    </div>
    <AllAccordion/>
    </div>
   </div>
    </div>
    <Footer/>
  </>
    
  )
}

export default Home
