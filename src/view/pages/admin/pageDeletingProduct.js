import React, {useEffect, useState} from 'react';
import {delProductFromProducts} from "../../../model/model";
import Table from "../../components/table";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ACTIONS_CREATORS} from "../../../state/redux/actions";
import {useLoginDispatcher} from "../../../state/mobx/store";
import {webSocket} from "../../../websocket/websocket";

const PageDeletingProduct = () => {
    const [data,setData]=useState('');
    const navigator = useNavigate()
    // const dispatch = useDispatch();
    const dispatch = useLoginDispatcher();
    const notification = (text)=>{
        alert(text)
    }
    webSocket(notification)
    function LogoutOnClick(){
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
                delProductFromProducts(tr[i].firstChild.innerHTML);
        }
        setData("Data is update")
    }
    function toAddingOnClick(){
        navigator("/admin/adding")
    }
    function toOrdersOnClick(){
        navigator("/admin/orders")
    }
    return (
        <div>
            <header>
                <input type="button" id="logout"  onClick={LogoutOnClick}></input>
                <div className='menu'>
                     <input type="button" id="to-adding" value="to adding product" onClick={toAddingOnClick}/>
                     <input type="button" id="to-orders" value="to orders" onClick={toOrdersOnClick}/>
                </div>
            </header>
            <Table id ={"delProduct"} value={"delete"} data = {data} onClick={delOnClick} />
        </div>
    );
};
export default PageDeletingProduct;