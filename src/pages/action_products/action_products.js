import React, {useContext} from 'react';
import './action_products.scss'
import {CustomContext} from "../../Context";
import {Link} from "react-router-dom";
import Cart from "../../Components/Cart";

const ActionProducts = () => {
    const {actions,addActions,basket,deleteObject,plusOne,product} = useContext(CustomContext)



    return (
        <section className='action__products'>
            <div className="container">
                {
                    product.filter((el)=>(
                        el.action ==='true'
                    )).map((el)=>(
                        <Cart el={el}/>
                    ))
                }

            </div>
        </section>
    );
};

export default ActionProducts;