import React from 'react';
import Table from "../components/table";

const PageBasket = (props) => {
    // function delOnClick(){
    //     let tr = document.querySelectorAll('.table-row');
    //     for (let i = 0; i < tr.length; i++) {
    //         if (tr[i].style.backgroundColor == 'rgb(187, 216, 192)')
    //             delProductFromBasket(i + 1,localStorage.getItem('login'));
    //     }
    // }
    function logoutOnClick(){
        localStorage.clear();
        props.setLoggedIn(false)
    }
    return (
        <div>
            <input type="button" id="logout" value="logout" onClick={logoutOnClick}></input>
            <Table id={"del"} value={"delete"}></Table></div>
    );
};

export default PageBasket;