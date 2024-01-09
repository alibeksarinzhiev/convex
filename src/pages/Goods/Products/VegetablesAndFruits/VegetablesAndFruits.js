import React, {useContext} from 'react';
import './VegetablesAndFruits.scss'
import {CustomContext} from "../../../../Context";
import {Link} from "react-router-dom"
import Cart from "../../../../Components/Cart";


const VegetablesAndFruits = () => {
    const {basket,plusOne,deleteObject,product} = useContext(CustomContext)


    return (
        <section className='vegetables'>
            <div className="container">
                <div className="vegetables__box">
                    <h1>Овощи и фрукты</h1>
                    <div className="vegetables__Line"></div>
                    <div className='cart__st'>
                        {product.filter((el)=>(
                            el.category === 'vegetables'
                        ))
                            .map((el)=>(
                         <Cart el={el}/>
                        ))}
                        {product.filter((el)=>(
                            el.category === 'fruits'
                        ))
                            .map((el)=>(
                          <Cart el={el}/>
                        ))}

                    </div>

                </div>
            </div>
        </section>
    );
};

export default VegetablesAndFruits;