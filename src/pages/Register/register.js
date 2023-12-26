import React, {useContext, useState} from 'react'
import './register.scss'
import img from './image 1.png'
import {Link} from "react-router-dom";
import krest from "../../img/icons8-крестик-48.png";
import axios from "axios";
import {CustomContext} from "../../Context";
import {useNavigate} from 'react-router-dom'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


const Register = () => {
    const navigate = useNavigate()
    const {setUser,status,showPassword} = useContext(CustomContext)

    const registerUser = (e)=>{
        e.preventDefault()

        let newUser ={
            name:e.target[0].value,
            surname:e.target[1].value,
            email:e.target[2].value,
            password:e.target[3].value
        }

        axios.post('http://localhost:8080/register',newUser)
            .then(({data})=>{
                setUser({
                    token:data.accessToken,
                    ...data.user
                })
                localStorage.setItem('user',JSON.stringify({
                    token:data.accessToken,
                    ...data.user
                }))
            })
        navigate('/')
    }

    return (
        <section className='register'>
            <div className='container'>
                <div className='register__image'>
                    <Link to='/'>
                        <img src={img} alt=""/>
                    </Link>
                    <div className="register__one">
                        <h4>Назад на главную</h4>
                        <Link to='/'> <img src={krest} alt=""/></Link>
                    </div>
                </div>
                <div className="register__three">
                    <form onSubmit={(e)=>registerUser(e)} className="register__fore">
                        <h1>Регистрация</h1>
                        <div className="register__email">
                            <h3>Имя</h3>
                            <input type="text" placeholder='Введите Имя'/>
                        </div>
                        <div className="register__email">
                            <h3>Фамилия</h3>
                            <input type="text" placeholder='Введите Фамилию'/>
                        </div>
                        <div className="register__email">
                            <h3>@Email</h3>
                            <input type="email" placeholder='Введите вашу почту'/>
                        </div>
                        <div className="register__five">
                            <p>Пароль</p>
                            <div className="register__password">
                                <input type={status?"text":"password"} placeholder='Введите пароль'/>
                                {status?
                                    <FaEyeSlash onClick={()=>showPassword()} />:
                                    <FaEye onClick={()=>showPassword()}/>
                                }
                            </div>
                        </div>
                        <div className="register__seven">
                            <input type="checkbox"/>
                            <p>Запомнить меня</p>
                        </div>
                        <div className="register__eight">
                            <div className="register__log">
                                <button>Зарегестрироваться</button>
                            </div>
                            <p>или</p>
                            <div className="register__out">
                                <Link to='/sign'>
                                    <button>У меня уже есть аккаунт</button>
                                </Link>
                            </div>
                        </div>
                    </form>



                </div>
            </div>
        </section>
    );
};

export default Register;