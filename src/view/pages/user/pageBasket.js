import React, {useState} from 'react';
import Table from "../../components/table";
import {delProductFromBasket} from "../../../model/model";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ACTIONS_CREATORS} from "../../../state/redux/actions";
import {useLoginDispatcher} from "../../../state/mobx/store";

const PageBasket = () => {
    const [data, setData] = useState('');
      const navigator = useNavigate();
    const dispatch = useLoginDispatcher();
    // const dispatch = useDispatch();
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
        // let action = ACTIONS_CREATORS.LOGOUT();
        // dispatch(action)
        dispatch(false)
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