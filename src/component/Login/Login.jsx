import React, { useContext} from 'react'
import { SectionContext } from '../../context/Contex'
import loginimg from '../../assest/login.png'
import '../Login/login.scss'
import axios from 'axios'
import LoginBtn from './loginBtn/LoginBtn'
import { useForm } from 'react-hook-form'
import {Select} from '../Select'


const url = 'https://reqres.in/api'


const initialValues = {
    Email:'',
    Password:'',
}

const Login = () => {
    const {setToken} = useContext(SectionContext)
    const {register,handleSubmit,formState:{errors}} = useForm({
        defaultValues:initialValues,
    })
    const submit = (value) => {
        const info = {
            email: value.Email,
            password:value.Password
        }

        axios.post(`${url}/login`,info)
            .then(res => {
                if(res.status === 200){
                   localStorage.setItem('token', res?.data?.token) 
                   setToken(res?.data?.token)
                }
            
            })
            .catch(err => {
                alert(err)
            })

    }


  return (
    <div>
        <div className="container">
           <div className="login">
           <Select/>
           </div>
            <div className="login-list">
            <div className="login-menu">
          <h2 className='login-title'>Ваша регистрация завершена!</h2>
            <p className='login-text'> Вы успешно зарегистрированы на сайте киви и ваше пароль 
            отправлен в виде смс на ваше телефонный номер</p>

            <form onSubmit={handleSubmit(submit)}>
                <span className='login-span'>Введите email или номер телефона</span>
                <input className={errors.Email?'error' : ''} type="email" {...register('Email',{required:true,minLength:3})}/>
                <div>{
                    (errors.Email) && <span className='text1'>Ошибка электронной почты</span>
                    }</div>
                <span className='login-span'>Пароль</span>
                <input className={errors.Password ?'error' : ''} type="password" {...register('Password',{required:true,minLength:3})}/>
                <div>{
                    (errors.Password) && <span className='text1'>ошибка пароля</span>
                    }</div>
                <LoginBtn/>
            </form>
           <div className="span-menu">
           <div className='span-ciziq'></div>
            <span className='login-span-text'>или</span>
            <div className='span-ciziq'></div>
           </div>
           <p className='login-text'>Восстоновить ваше пароль</p>
          </div>
          <div className="login-img">
            <img className='login-img' src={loginimg} alt="" />
          </div>
            </div>
        </div>

    </div>
  )
}

export default Login
