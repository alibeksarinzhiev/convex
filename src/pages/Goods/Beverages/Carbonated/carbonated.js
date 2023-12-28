import React, {useContext} from 'react';
import './carbonated.scss'
import {CustomContext} from "../../../../Context";
import Cart from "../../../../Components/Cart";

const Carbonated = () => {
    const {carbonated,addCarbonated,product,} = useContext(CustomContext)

    return (
        <div className='carbonated'>
            <div className="container">
                <div className="carbonated__box">
                    <h1>Газированные</h1>
                    <div className="carbonated__Line"></div>
                    <div className='cart__st'>
                        {carbonated.map((el)=>(
                            <Cart el={el}/>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carbonated;