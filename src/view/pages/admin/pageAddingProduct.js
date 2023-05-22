import React, {useState} from 'react';
import {addProductToProducts, storeSetLogout, webSocketNotification} from "../../../model/model";
import {useNavigate} from "react-router-dom";

const PageAddingProduct = () => {
    const [data, setData] = useState('');
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [parametrs, setParametrs] = useState('');
    const [total, setTotal] = useState('');
    const navigator = useNavigate();
    webSocketNotification();

    const addOnClick = async () => {
        try {
            const answer = await addProductToProducts(
                JSON.stringify({
                    id: id,
                    name: name,
                    parametrs: parametrs,
                    total: total
                })
            );
            if (answer === 'true') {
                setData('Successful');
            } else if (answer === '') {
            } else {
                setData("Error")
            }
        } catch (error) {
            console.error(error);
        }
    };
    function backOnClick(){
        navigator("/admin/products");
    }
    function logoutOnClick(){
        storeSetLogout();
        localStorage.clear();
        navigator("/login");
    }
    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleParametrsChange = (e) => {
        setParametrs(e.target.value);
    };

    const handleTotalChange = (e) => {
        setTotal(e.target.value);
    };
    function backOnClick(){
        navigator("/admin/products");
    }
    return (
        <div>
            <header>
            <input type="button" id="to-deleting" value="back to table" onClick={backOnClick}/>
            <input type="button" id="logout"  onClick={logoutOnClick}></input></header>
            <div className={"containerAdding"}>
            <input type="text" id="idAdd" placeholder="id" onChange={handleIdChange}></input>
            <input type="text" id="nameAdd" placeholder="name" onChange={handleNameChange}></input>
            <input type="text" id="parametrsAdd" placeholder="parametrs" onChange={handleParametrsChange}></input>
            <input type="text" id="totalAdd" placeholder="total" onChange={handleTotalChange}></input>
            <input type="button" id="addToProduct" value="add" onClick={addOnClick}></input>
            <p>{data}</p></div>
            </div>
    );
};

export default PageAddingProduct;