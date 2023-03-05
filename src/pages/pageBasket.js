import React from 'react';
import Table from "../components/table";

const PageBasket = (props) => {
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