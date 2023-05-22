import React, {useState} from 'react';
import Table from "../../components/table";
import {delProductFromBasket, storeSetLogout} from "../../../model/model";
import {useNavigate} from "react-router-dom";

const PageBasket = () => {
    const [data, setData] = useState('');
      const navigator = useNavigate();
    function delOnClick(){
        let tr = document.querySelectorAll('.table-row');
        for (let i = 0; i < tr.length; i++) {
            if (tr[i].style.backgroundColor === 'rgb(187, 216, 192)')
                delProductFromBasket(tr[i].firstChild.innerHTML,localStorage.getItem('login'));

        }setData("Data is update")
    }
    function backOnClick(){
        navigator("/user/products");
    }
    function logoutOnClick(){
        storeSetLogout();
        localStorage.clear();
        navigator("/login");
    }
    return (
        <div>
            <header>
            <input type="button" id="logout" onClick={logoutOnClick}></input></header>
            <div>
            <Table id={"del"} value={"delete"} data={data} button={<input type="button" value="back" id="back" onClick={backOnClick}/>}  onClick={delOnClick}></Table>
        </div></div>
    );
};

export default PageBasket;