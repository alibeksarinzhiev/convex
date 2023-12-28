import React, {useContext} from 'react';
import './dumplings.scss'
import {CustomContext} from "../../../../Context";
import Cart from "../../../../Components/Cart";

const Dumplings = () => {
    const {dumplings,addDumplings,product,} = useContext(CustomContext)

    return (
        <div className='dumplinks'>
            <div className="container">
                <div className="dumplinks__box">
                    <h1>Пельмени</h1>
                    <div className="dumplinks__Line"></div>
                    <div className='cart__st'>
                        {dumplings.map((el)=>(
                            <Cart el={el}/>
                        ))}

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dumplings;