import React, {useContext} from 'react';
import './fish.scss';
import {CustomContext} from "../../../../Context";
import Cart from "../../../../Components/Cart";

const Fish = () => {
    const {fish,addFish,product,} = useContext(CustomContext)

    return (
        <div className='fish'>
            <div className="container">
                <div className="fish__box">
                    <h1>Рыбные</h1>
                    <div className="fish__Line"></div>
                    <div className='cart__st'>
                        {fish.map((el)=>(
                            <Cart el={el}/>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fish;