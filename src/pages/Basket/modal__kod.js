import React from 'react';
import './modal__kod.scss'

const ModalKod = ({active, setActive}) => {
    return (
        <div className={active ? "modalkod active" : "modalkod"} onClick={() => setActive(false)}>
            <div className={active ? "modalkod__content active" : "modalkod__content"} onClick={e => e.stopPropagation()}>
                <input type="text" placeholder='Введите промокод'/>
                <button>Отправить</button>
            </div>

        </div>
    );
};

export default ModalKod;