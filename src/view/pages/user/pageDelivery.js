import React from 'react';
import {storeSetLogout} from "../../../model/model";
import Table from "../../components/table";
import {useNavigate} from "react-router-dom";

const PageDelivery = () => {
    const navigator = useNavigate()

    function LogoutOnClick() {
        storeSetLogout();
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