import React, {useEffect, useState} from 'react';
import {async_getBasket as getBasket} from "../model/model";
import Table from "../components/table";
import {useNavigate} from "react-router-dom";

const PageProducts = (props) => {
    const navigate = useNavigate();
    function logoutOnClick(){
        localStorage.clear();
        props.setLoggedIn(false)
    }
    function addToBasketOnClick(){


    }
    if(props.isLoggedIn){return (
        <div>
            <input type="button" id="logout" value="logout" onClick={logoutOnClick}></input>
            <input type="button" id="to-basket" value="to basket" onClick={addToBasketOnClick}/>
            <Table id ={"add"} value={"add to basket"}/>
        </div>
    );}
    else navigate('/login')
};

export default PageProducts;