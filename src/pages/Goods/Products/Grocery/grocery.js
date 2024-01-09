import React, {useContext} from 'react';
import './grocery.scss'
import {CustomContext} from "../../../../Context";
import Cart from "../../../../Components/Cart";

const Grocery = () => {
    const {grocery,addGrocery,product,} = useContext(CustomContext)

    return (
        <div className='grocery'>
            <div className="container">
                <div className="grocery__box">
                <h1>Бакалея</h1>
                <div className="grocery__Line"></div>
                    <div className='cart__st'>
                        {product.filter((el)=>(
                            el.category === 'grocery'
                        ))
                            .map((el)=>(
                            <Cart el={el}/>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Grocery;