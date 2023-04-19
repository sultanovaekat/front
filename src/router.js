import React, {useState} from 'react';
import PageLogin from "./pages/pageLogin";
import PageBasket from "./pages/user/pageBasket";
import PageProducts from "./pages/user/pageProducts";
import {
    BrowserRouter as
    Router, Routes, Route
} from 'react-router-dom';
import PageDeletingProduct from "./pages/admin/pageDeletingProduct";
import PageAddingProduct from "./pages/admin/pageAddingProduct";
import PageOrders from "./pages/admin/pageOrders";
import PageDelivery from "./pages/user/pageDelivery";
import {useSelector} from 'react-redux';
import {getLoginStatus} from "./mobx/store";


export const App = () => {
    // const isLoggedIn = useSelector(state => state.isLoggedIn);

let isLoggedIn= getLoginStatus()

    function StartPage() {
        if (isLoggedIn) return <PageProducts />;
        return <PageLogin />;
    }

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<PageLogin />} />
                <Route path="/user/products" element={<PageProducts />} />
                <Route path="/user/basket" element={<PageBasket />} />
                <Route path="/user/delivery" element={<PageDelivery />} />
                <Route path="*" element={<StartPage />} />
                <Route path="/admin/products" element={<PageDeletingProduct />} />
                <Route path="/admin/adding" element={<PageAddingProduct />} />
                <Route path="/admin/orders" element={<PageOrders />} />
            </Routes>
        </Router>
    );
};


