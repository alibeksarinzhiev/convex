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
                 <Route path={''} element={<Home/>}/>
                 <Route path={'/search'} element={<Search/>}/>
                 <Route path={'/about'} element={<About/>}/>
                 <Route path={'/faq'} element={<Faq/>}/>
             </Route>
             <Route path={'/sign'} element={<Sign/>}/>
         </Routes>
        </>
    );
};

export default App;