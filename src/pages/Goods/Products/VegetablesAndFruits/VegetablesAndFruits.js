import React, {useContext} from 'react';
import './VegetablesAndFruits.scss'
import {CustomContext} from "../../../../Context";
import {Link} from "react-router-dom"
import img from "../../../../img/5d3eee44c3e1b.jpg";
import Cart from "../../../../Components/Cart";


const VegetablesAndFruits = () => {
    const {vegetables,addVegetables,fruits,addFruits,basket,plusOne,deleteObject} = useContext(CustomContext)


    return (
        <section className='vegetables'>
            <div className="container">
                <div className="vegetables__box">
                    <h1>Овощи и фрукты</h1>
                    <div className="vegetables__Line"></div>
                    <div className='cart__st'>
                        {vegetables.map((el)=>(
                         <Cart el={el}/>
                        ))}
                        {fruits.map((el)=>(
                          <Cart el={el}/>
                        ))}

                    </div>

                </div>
            </div>
        </section>
    );
};

export default VegetablesAndFruits;