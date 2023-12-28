import React, {useContext} from 'react';
import './flakes.scss'
import {CustomContext} from "../../../../Context";
import Cart from "../../../../Components/Cart";

const Flakes = () => {
    const {flakes,addFlakes,product,} = useContext(CustomContext)

    return (
        <div className='flakes'>
            <div className="container">
                <div className="flakes__box">
                    <h1>Хлопья</h1>
                    <div className="flakes__Line"></div>
                    <div className='cart__st'>
                        {flakes.map((el)=>(
                            <Cart el={el}/>
                            ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Flakes;