import React, {useState} from 'react';
import { addProductToProducts} from "../../model/model";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ACTIONS_CREATORS} from "../../redux/actions";
import {useLoginDispatcher} from "../../mobx/store";
import {webSocket} from "../../websocket/websocket";

const PageAddingProduct = () => {
    const [data, setData] = useState('');
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [parametrs, setParametrs] = useState('');
    const [total, setTotal] = useState('');
    const dispatch = useLoginDispatcher();

    const navigator = useNavigate();
    const notification = (text)=>{
        alert(text)
    }
    webSocket(notification)
    // const dispatch = useDispatch();
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
        // let action = ACTIONS_CREATORS.LOGOUT();
        // dispatch(action)
        dispatch(false)
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