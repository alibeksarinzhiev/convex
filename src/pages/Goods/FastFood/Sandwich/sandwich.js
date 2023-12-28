import React, {useContext} from 'react';
import './sandwich.scss'
import {CustomContext} from "../../../../Context";
import Cart from "../../../../Components/Cart";

const Sandwich = () => {
    const {sandwich,addSandwich,product,} = useContext(CustomContext)

    return (
        <div className='sandwich'>
            <div className="container">
                <div className="sandwich__box">
                    <h1>Сэндвичи</h1>
                    <div className="sandwich__Line"></div>
                    <div className='cart__st'>
                        {sandwich.map((el)=>(
                            <Cart el={el}/>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sandwich;