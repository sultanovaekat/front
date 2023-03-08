import React, {useState} from 'react';
import {addProductToBasket} from "../model/model";

const TableRow = ({val}) => {
    const [color,setColor]=useState('#EEEEE');


    const {
        _name,
        _parametrs,
        _total
    } = val
    return (
        <div className="table-row"  style={{background:color}} onClick={()=>{setColor("rgb(187, 216, 192)");}}>
            <div className="table-data">{val._name}</div>
            <div className="table-data">{val._parametrs}</div>
            <div className="table-data">{val._total}</div>

        </div>
    );
};

export default TableRow;