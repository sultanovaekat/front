import React, {useEffect, useState} from 'react';
import {addProductToBasket} from "../model/model";
import Table from "../components/table";
import {useNavigate} from "react-router-dom";

const PageProducts = (props) => {
    const [data, setData] = useState('');
    const navigator = useNavigate()
    function LogoutOnClick(){
        localStorage.clear();
        navigator("/login")
    }
    const addToBasketOnClick = async () => {
        let tr = document.querySelectorAll('.table-row');
        for (let i = 0; i < tr.length; i++) {
            if (tr[i].style.backgroundColor == 'rgb(187, 216, 192)')
                addProductToBasket(i + 1,localStorage.getItem('login'));
        }
        setData("Товары успешно добавлены")
    }
  return (
        <div>
            <input type="button" id="logout" value="logout" onClick={LogoutOnClick}></input>
            <input type="button" id="to-basket" value="to basket" onClick={addToBasketOnClick}/>

            <Table id ={"add"} value={"add to basket"} data={data} onClick={addToBasketOnClick}/>

        </div>
    );
};

export default PageProducts;