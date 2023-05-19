import React, {useEffect, useState} from 'react';
import {addProductToBasket, changeStatusDelivery} from "../../../model/model";
import Table from "../../components/table";
import {useNavigate} from "react-router-dom";
import {ACTIONS_CREATORS} from "../../../state/redux/actions";
import {useDispatch} from "react-redux";
import {useLoginDispatcher} from "../../../state/mobx/store";


const PageDelivery = () => {
    const navigator = useNavigate()
    const dispatch = useLoginDispatcher();
    // const dispatch = useDispatch();
    function LogoutOnClick() {
        // let action = ACTIONS_CREATORS.LOGOUT();
        // dispatch(action)
        dispatch(false)
        localStorage.clear();
        navigator("/login")
    }
    function backOnClick(){
        navigator("/user/products");
    }
    return (
        <div>
            <header>
            <input type="button" id="logout" onClick={LogoutOnClick}></input></header>
            <Table id ={"buy"} value={"to products"} onClick={backOnClick}/>
        </div>
    );
};

export default PageDelivery;