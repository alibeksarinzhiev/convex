import React from 'react'
import  './register.css'
import img from './image 1.png'
import {Link} from "react-router-dom";
import krest from "../../img/icons8-крестик-48.png";


const Register = () => {
    return (
       <section className='register'>
           <div className='container'>
               <div className='image'>
                 <img src={img}alt=""/>
                   <div className="reg__one">
                       <h4>Назад на главную</h4>
                       <Link to='/'> <img src={krest} alt=""/></Link>
                   </div>
               </div>
               <div className="reg__two">
                   <div className="reg__three">

                       <div className="reg__fore">
                           <h1>Регистрация</h1>
                           <div className="contacts__login">
                               <h3>@Email</h3>
                               <input type="email" placeholder='Введите вашу почту'/>
                           </div>
                           <h4>Номер телефона</h4>
                           <input type="number" placeholder='Введите ваш номер телефона'/>
                       </div>
                       <div className="reg__five">
                           <p>Пароль</p>
                           <input type="password" placeholder='Введите пароль'/>
                       </div>
                       <div className="reg__six">
                           <div className="reg__seven">
                               <input type="checkbox"/>
                               <p>Запомнить меня</p>
                           </div>
                       </div>
                       <div className="sign__but">
                           <div className="reg__eight">
                               <button1>Войти</button1>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </section>
    );
};

export default Register;