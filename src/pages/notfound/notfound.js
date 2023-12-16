import React from 'react';
import img from '../../img/notfoundimg.png'
import './notfound.scss'
import {Link} from "react-router-dom"


const Notfound = () => {
    return (
        <div>
            <div className="container">
                <div className="error">
                    <div>
                        <h1>
                            Упс, что-то пошло не так
                        </h1>
                        <h3>
                            Мы не можем найти страницу, которую вы ищете
                        </h3>
                        <Link to='/'> <button>
                            Вернуться на главную
                        </button></Link>
                    </div>
                    <div>
                        <img src={img} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notfound;