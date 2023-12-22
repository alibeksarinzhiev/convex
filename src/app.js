import React from 'react';
import {Route,Routes} from 'react-router-dom'
import './app.scss'
import Layout from "./Layout/layout";
import Home from "./pages/home/home";
import Search from "./pages/Search/Search";
import About from "./pages/About/About";
import Faq from "./pages/FAQ/faq";
import News from "./pages/News/news";
import Details from "./pages/News/details/details";
import Contacts from "./pages/Contacts/contacts";
import Balance from "./pages/Balance/balance";
import Sign from "./pages/Sign in/sign";
import Product from "./pages/Product/product";
import Notfound from "./pages/notfound/notfound";
import Register from "./pages/Register/register";
import Basket from "./pages/Basket/basket";
import Order from "./pages/Basket/Order/order";
import Payment from "./pages/Basket/Payment/payment";
import VegetablesAndFruits from "./pages/Goods/Products/VegetablesAndFruits/VegetablesAndFruits";
import Grocery from "./pages/Goods/Products/Grocery/grocery";
import Dairy from "./pages/Goods/Products/dairy/dairy";


const App = () => {

    return (
        <>
         <Routes>
             <Route path={'/'} element={<Layout/>}>
                 <Route path={''} element={<Home/>}/>
                 <Route path={'/search'} element={<Search/>}/>
                 <Route path={'/about'} element={<About/>}/>
                 <Route path={'/faq'} element={<Faq/>}/>
                 <Route path={'/news'} element={<News/>}/>
                 <Route path={'/details'} element={<Details/>}/>
                 <Route path={'/contacts'} element={<Contacts/>}/>
                 <Route path={'/balance'} element={<Balance/>}/>
                 <Route path={'/product'} element={<Product/>}/>
                 <Route path={''} element={<Home/>}/>
                 <Route path={'/search'} element={<Search/>}/>
                 <Route path={'/about'} element={<About/>}/>
                 <Route path={'/faq'} element={<Faq/>}/>
                 <Route path={'/basket'} element={<Basket/>}/>
                 <Route path={'/order'} element={<Order/>}/>
                 <Route path={'/payment'} element={<Payment/>}/>
                 <Route path={'/vegetablesandfruits'} element={<VegetablesAndFruits/>}/>
                 <Route path={'/grocery'} element={<Grocery/>}/>
                 <Route path={'/dairy'} element={<Dairy/>}/>
             </Route>
             <Route path={'/sign'} element={<Sign/>}/>
             <Route path={'*'} element={<Notfound/>}/>
             <Route path={'/register'} element={<Register/>}/>
         </Routes>
        </>
    );
};

export default App;
