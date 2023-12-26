import React from 'react';
import Swiper from './swiper/swiper'
import Slides from "./swiper/slides/slides";
import Action from "./action/action";
import New from "./new/new";
import PopularGoods from "./popularGoods/popularGoods";


const Home = () => {
    return (
        <>
            <Swiper/>
            <Slides/>
            {/*<Action/>*/}
            {/*<New/>*/}
            {/*<PopularGoods/>*/}
        </>
    );
};

export default Home;