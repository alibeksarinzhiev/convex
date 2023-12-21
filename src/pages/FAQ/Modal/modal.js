import React from 'react';
import './modal.scss'

const Modal = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false) }>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <h1>Задать вопрос</h1>
                <h2>Введите имя</h2>
                <input type="text" placeholder='Введите имя'/>
                <h3>Напишите нам</h3>
                <textarea name="Напишите нам" id="" cols="30" rows="10"></textarea>
                <button>Отправить</button>
            </div>
        </div>
    );
};

export default Modal;