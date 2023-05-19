import React, {useState} from 'react';

const TableRow = ({val}) => {
    const [color,setColor]=useState('#EEEEE');


if (val.parametrs){
    return (
        <div className="table-row"  style={{background:color}} onClick={()=>{setColor("rgb(187, 216, 192)");}}>
            <div className="table-data">{val.id}</div>
            <div className="table-data">{val.name}</div>
            <div className="table-data">{val.parametrs}</div>
            <div className="table-data">{val.total}</div>
        </div>
    );
}
else {
    let status
    if (val._status == "true"){status="delivered"}else {status="on the way"}
    return (
    <div className="table-row"  style={{background:color}} onClick={()=>{setColor("rgb(187, 216, 192)");}}>
        <div className="table-data">{val.id}</div>
        <div className="table-data">{val.name}</div>
        <div className="table-data">{val.login}</div>
        <div className="table-data">{status}</div>
    </div>
);}

};

export default TableRow;