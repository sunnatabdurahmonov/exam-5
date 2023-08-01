import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { baseUrl } from '../../BaseUrl'
import { SectionContext } from '../../context/Contex'
import { useParams } from 'react-router-dom'
import { Select } from '../Select'
import '../ProductId/productId.scss'
import { ButtonNumber } from './ButtonNumber'
import { Button2 } from './Button2'
import { Grid } from './Grid'
import { Render } from './Render'
import { Footer } from '../footer'

export const ProductId = () => {
   const [product,setProduct] = useState()
   const {loading,setLoading} = useContext(SectionContext)
   const {productId} = useParams()

    useEffect(() => {
       setLoading(true)
       const  getFunction = async () => {
       try {
        const res = await axios.get(`${baseUrl}/${productId}`)
        const result = (
           <div className="productId">
            <div className="product-id">
            <h1 className='product-title'>{res.data?.title}</h1>
            <img className='product-img' src={res.data?.image} alt="rasm" />
            </div>
           <div className="price-product">
          <div className="jadval">
          <div className="p-text">
                <p>Артикул:4418970</p>
                <p>обновлено:28.04.17</p>
                </div>
           <h2 className='price'>{res.data?.price} $</h2>
           <p className='toshkent'>Ташкент, Ташкентская область, Юнусабадский район </p>
          <div className="btn-product">
          <ButtonNumber/> 
           <ButtonNumber/>
          </div>
          <p className='zuxriddin'>Автор обьявлении: <span className='zuxxi'>Зухриддин Темиров</span></p>
          <div className="bt3-menu">
           <Button2 color='blue'
           text2='Написать автору'
           />
              <Button2 color='blue-oppasity'
           text2='Предложить свою цену'
           />
          </div>
    </div>
          <div className="grid-menu">
          <Grid/>
          </div>
          <p className='description'>{res.data?.description}</p>
          <div className="kurildi">
            <p>Просмотры:10958</p>
            <p className='danger'>Пожаловатся</p>
          </div>
           </div>
           </div>
           
        )
           setProduct(result)
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
        <div className="product-container">
            <Select/>
            <div className="product-text">
                <span>Объявления  /</span>
                <span>Ташкент Недвижимость  /</span>
                <span>Ташкент Квартиры  /</span>
                <span>Ташкент  Продажа  /</span>
                <span>Новостройки Ташкент</span>
            </div>
         <div className="product-menu">
            <div className="product-list">
            {product}
            </div>
         </div>
     <div className="render">
    <Render/>
     </div>
    </div>
    </div>
    <Footer/>
</>
  )
}

export default ProductId
