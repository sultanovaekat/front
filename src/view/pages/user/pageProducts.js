import React, {useState} from 'react';
import {addProductToBasket, storeSetLogout} from "../../../model/model";
import Table from "../../components/table";
import {useNavigate} from "react-router-dom";

const PageProducts = () => {
    const [data,setData]=useState();
    // const dispatch = useLoginDispatcher();
    const navigator = useNavigate()
    function LogoutOnClick(){
        storeSetLogout()
        localStorage.clear();
        navigator("/login")
    }
    const addToBasketOnClick = async () => {
        let tr = document.querySelectorAll('.table-row');
        for (let i = 0; i < tr.length; i++) {
            if (tr[i].style.backgroundColor === 'rgb(187, 216, 192)')
                addProductToBasket(i + 1,localStorage.getItem('login'));
        }
        setData('Data is update')

    }

    function toBasketOnClick(){
        navigator("/user/basket")
    }
    function toDeliveryOnClick(){
        navigator("/user/delivery")
    }
  return (
        <div>
            <header>
            <input type="button" id="logout"  onClick={LogoutOnClick}></input>
                <div className='menu'>
            <input type="button" id="to-basket" onClick={toBasketOnClick}/>
            <input type="button" id="to-delivery" onClick={toDeliveryOnClick}/></div></header>
            <Table id ={"add"} value={"add to basket"}  data={data} onClick={addToBasketOnClick}/>
        </div>
    );
};

export default PageProducts;