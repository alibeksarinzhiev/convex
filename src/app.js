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
import Dumplings from "./pages/Goods/FastFood/Dumplings/dumplings";
import Sandwich from "./pages/Goods/FastFood/Sandwich/sandwich";
import Flakes from "./pages/Goods/FastFood/Flakes/flakes";
import Fish from "./pages/Goods/CannedFood/Fish/fish";
import Meat from "./pages/Goods/CannedFood/Meat/meat";
import Vegetable from "./pages/Goods/CannedFood/Vegetable/vegetable";
import Natural from "./pages/Goods/Beverages/Natural/natural";
import Carbonated from "./pages/Goods/Beverages/Carbonated/carbonated";
import Alcoholik from "./pages/Goods/Beverages/Alcoholic/alcoholik";
import Freshener from "./pages/Goods/Household/Freshener/freshener";
import Detergents from "./pages/Goods/Household/Detergents/detergents";
import Cleaning from "./pages/Goods/Household/CleaningProducts/cleaning";
import Man from "./pages/Goods/PersonalCare/Man`s/man";
import Woman from "./pages/Goods/PersonalCare/Woman`s/woman";
import Children from "./pages/Goods/PersonalCare/Children`s/children";


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
                 <Route path={'/dumplinks'} element={<Dumplings/>}/>
                 <Route path={'/sandwich'} element={<Sandwich/>}/>
                 <Route path={'/flakes'} element={<Flakes/>}/>
                 <Route path={'/fish'} element={<Fish/>}/>
                 <Route path={'/meat'} element={<Meat/>}/>
                 <Route path={'/vegetable'} element={<Vegetable/>}/>
                 <Route path={'/natural'} element={<Natural/>}/>
                 <Route path={'/carbonated'} element={<Carbonated/>}/>
                 <Route path={'/alkoholik'} element={<Alcoholik/>}/>
                 <Route path={'/freshener'} element={<Freshener/>}/>
                 <Route path={'/detergents'} element={<Detergents/>}/>
                 <Route path={'/cleaning'} element={<Cleaning/>}/>
                 <Route path={'/man'} element={<Man/>}/>
                 <Route path={'/woman'} element={<Woman/>}/>
                 <Route path={'/children'} element={<Children/>}/>
             </Route>
             <Route path={'/sign'} element={<Sign/>}/>
             <Route path={'*'} element={<Notfound/>}/>
             <Route path={'/register'} element={<Register/>}/>
         </Routes>
        </>
    );
};

export default App;
