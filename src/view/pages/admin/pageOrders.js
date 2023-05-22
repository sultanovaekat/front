import React, {useState} from 'react';
import {changeStatusDelivery, storeSetLogout, webSocketNotification} from "../../../model/model";
import Table from "../../components/table";
import {useNavigate} from "react-router-dom";

const PageOrders= () => {
    const navigator = useNavigate()
    const [data, setData]= useState('')
    webSocketNotification();

    function LogoutOnClick() {
        storeSetLogout();
        localStorage.clear();
        navigator("/login")
    }
    const delOnClick = async () => {
        let tr = document.querySelectorAll('.table-row');
        for (let i = 0; i < tr.length; i++) {
            if (tr[i].style.backgroundColor === 'rgb(187, 216, 192)')
                await changeStatusDelivery(tr[i].children[2].innerHTML);
        }
        setData('Data is update')
    }
    function toDeliveryOnClick(){
        navigator("/admin/products");
    }
    return (
        <div>
            <header>
            <input type="button" id="logout"  onClick={LogoutOnClick}></input>
            <input type="button" id="to-products" value="to products" onClick={toDeliveryOnClick}/></header>
            <Table id ={"changeStatus"} value={"change status"} data={data} onClick={delOnClick}/>
        </div>
    );
};
export default PageOrders;