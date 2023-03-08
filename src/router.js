import React, {useState} from 'react';
import PageLogin from "./pages/pageLogin";
import PageBasket from "./pages/pageBasket";
import PageProducts from "./pages/pageProducts";
import {
    BrowserRouter as
    Router, Routes, Route
} from 'react-router-dom';

export const App = () => {

        const [isLoggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem('isLoggedIn')));
        function StartPage(){
        if(isLoggedIn) return <PageProducts setLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn}/>;
        return <PageLogin  setLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} />;
    }
        return (
            <Router>
            <Routes>
                <Route path="/login" element={<PageLogin  setLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} />} />
             <Route path="/products" element={<PageProducts setLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn}/>}/>
             <Route path="/basket" element={<PageBasket setLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn}/> }/>
                <Route path="*" element={<StartPage />} />
                <Route path="/products/admin" element={<PageProducts setLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn}/>}/>
        </Routes>
            </Router>)


    }


