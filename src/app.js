import React from 'react';
import {Route,Routes} from 'react-router-dom'
import './app.scss'
import Layout from "./Layout/layout";
import Home from "./pages/home/home";
import Search from "./pages/Search/Search";

const App = () => {
    return (
        <>
         <Routes>
             <Route path={'/'} element={<Layout/>}>
             <Route path={''} element={<Home/>}/>
             <Route path={'/search'} element={<Search/>}/>
             </Route>
         </Routes>
        </>
    );
};

export default App;