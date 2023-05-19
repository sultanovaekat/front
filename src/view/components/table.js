import React, {useEffect, useState} from 'react';
import {
    async_getProducts as getProducts,
    async_getBasket as getBasket,
    async_getOrders,
    async_getOrdersUser
} from '../../model/model.js';
import TableRow from "./tableRow";
import {webSocket} from "../../websocket/websocket";

const Table = (props) => {
    const [fetchedData, setFetchedData] = useState([]);
    async function tableOrders(){
        const orders = await async_getOrdersUser(localStorage.getItem("login"))
        setFetchedData(orders)
        webSocket(tableOrders)
    }
    useEffect(() => {
        const fetchData = async () => {
            if(props.id === "del"){const products =  await getBasket(localStorage.getItem("login"));
                setFetchedData(products)
                console.log(products)
                }
            else if(props.id === "add" || props.id === "delProduct") {const products =  await getProducts(localStorage.getItem("JWT"));
                setFetchedData(products)
            }
            else if (props.id === "changeStatus"){const orders = await async_getOrders();
                setFetchedData(orders)
            }
            else if (props.id === "buy"){
                await tableOrders();return
            }
        }

            fetchData();

    }, [props.data]);//попробовать глобальную

    let keys = [];
    for(let k in fetchedData[0]) keys.push(k);

        return (<div>
        <div className="container">
            <div className="table">
                <div className="table-header">
                        <div className="header__item">
                        <div id="id" className="filter__link" href="#">{keys[0]}</div>
                        </div>
                    <div className="header__item">
                        <div id="id" className="filter__link" href="#">{keys[1]}</div>
                    </div>
                    <div className="header__item">
                        <div id="id" className="filter__link" href="#">{keys[2]}</div>
                    </div>
                    <div className="header__item">
                        <div id="id" className="filter__link" href="#">{keys[3]}</div>
                    </div>

                </div>
                <div className="table-content">
                    {fetchedData.map((val, key) => <TableRow key={key} val={val} />)}
                </div>
                <p id="notification">{props.data}</p>
                <div className="table-buttons">
                    {props.button}
                    <input type="button" value={props.value} id={props.id} onClick={props.onClick} ></input>
                </div>
            </div>
        </div>
            </div>
        );
};
export default Table;