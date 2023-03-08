import React, {useEffect, useState} from 'react';
import { async_getProducts as getProducts,async_getBasket as getBasket, delProductFromBasket} from './../model/model.js';
import TableRow from "./tableRow";

const Table = (props) => {

    const [fetchedData, setFetchedData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            if(props.id === "del"){const products =  await getBasket("luisa");
                setFetchedData(products)
                console.log(products)}
            else if(props.id === "add") {const products =  await getProducts(localStorage.getItem("JWT"));
                setFetchedData(products)}
            console.log(fetchedData)
        }
        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);
    }, [])

        return (<div>
        <div className="container">
            <div className="table">
                <div className="table-header">
                    <div className="header__item">
                        <div id="id" className="filter__link" href="#">ID</div>
                    </div>
                    <div className="header__item">
                        <div id="name" className="filter__link" href="#">Name</div>
                    </div>
                    <div className="header__item">
                        <div id="wins" className="filter__link filter__link--number" href="#">Parametrs</div>
                    </div>
                    <div className="header__item">
                        <div id="total" className="filter__link filter__link--number" href="#">Total</div>
                    </div>
                </div>
                <div className="table-content">
                    {fetchedData.map((val, key) => <TableRow key={key} val={val} />)}
                </div>
                <p id="notification">{props.data}</p>
                <div className="table-buttons">
                    {props.button}
                    <input type="button" value={props.value} id={props.id} onClick={props.onClick}></input>
                </div>
            </div>
        </div>
            </div>
        );

};
export default Table;