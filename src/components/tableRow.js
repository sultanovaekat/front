import React from 'react';

const TableRow = ({val}) => {
    function onClick(){
            let r = document.querySelector(".table-row");
            if (r.style.backgroundColor != 'rgb(187, 216, 192)') r.style.backgroundColor = 'rgb(187, 216, 192)';
            else r.style.backgroundColor = '#EEEEEE'

    }
    const {
        _name,
        _parametrs,
        _total
    } = val
    return (
        <div className="table-row" onClick={onClick}>
            <div className="table-data">{val._name}</div>
            <div className="table-data">{val._parametrs}</div>
            <div className="table-data">{val._total}</div>

        </div>
    );
};

export default TableRow;