import React, {useEffect, useState} from 'react';
import {changeStatusDelivery} from "../../../model/model";
import Table from "../../components/table";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ACTIONS_CREATORS} from "../../../state/redux/actions";
import {useLoginDispatcher} from "../../../state/mobx/store";
import {webSocket} from "../../../websocket/websocket";


const PageOrders= () => {
    const navigator = useNavigate()
    // const dispatch = useDispatch();
    const dispatch = useLoginDispatcher();
    const [data, setData]= useState('')
    const notification = (text)=>{
        alert(text)
    }
    webSocket(notification)
    function LogoutOnClick() {
        // let action = ACTIONS_CREATORS.LOGOUT();
        // dispatch(action)
        dispatch(false)
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