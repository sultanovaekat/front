import React from 'react';
import PageLogin from "./view/pages/pageLogin";
import PageBasket from "./view/pages/user/pageBasket";
import PageProducts from "./view/pages/user/pageProducts";
import {
    BrowserRouter as
    Router, Routes, Route
} from 'react-router-dom';
import PageDeletingProduct from "./view/pages/admin/pageDeletingProduct";
import PageAddingProduct from "./view/pages/admin/pageAddingProduct";
import PageOrders from "./view/pages/admin/pageOrders";
import PageDelivery from "./view/pages/user/pageDelivery";
import {useSelector} from 'react-redux';
import {getLoginStatus} from "./state/mobx/store";


export const App = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);

// let isLoggedIn= getLoginStatus()

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


