import React, {useContext} from 'react';
import './action_products.scss'
import {CustomContext} from "../../Context";
import {Link} from "react-router-dom";

const ActionProducts = () => {
    const {actions,addActions,basket,deleteObject,plusOne,} = useContext(CustomContext)



    return (
        <section className='action__products'>
            <div className="container">
                {actions.map((el)=>{
                    <div>
                        
                    </div>
                })}

            </div>
        </section>
    );
};

export default ActionProducts;