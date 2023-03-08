import React, {useState} from 'react';
import Table from "../components/table";
import {delProductFromBasket} from "../model/model";
import {useNavigate} from "react-router-dom";

const PageBasket = (props) => {
    const [data, setData] = useState('');
    const navigator = useNavigate();
    function delOnClick(){
        let tr = document.querySelectorAll('.table-row');
        for (let i = 0; i < tr.length; i++) {
            if (tr[i].style.backgroundColor == 'rgb(187, 216, 192)')
                delProductFromBasket(tr[i].firstChild.innerHTML,localStorage.getItem('login'));
        }
        setData("Товар удален")
    }
    function backOnClick(){
        navigator("/products");
    }
    function logoutOnClick(){
        localStorage.clear();
        navigator("/login");
    }
    return (
        <div>
            <input type="button" id="logout" value="logout" onClick={logoutOnClick}></input>
            <Table id={"del"} value={"delete"} button={<input type="button" value="back" id="back" onClick={backOnClick}/>} data={data} onClick={delOnClick}></Table></div>
    );
};

export default PageBasket;