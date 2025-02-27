import React from "react";
//import PropTypes from 'prop-types'

function MiComponente({ digitoCinco, digitoCuatro, digitoTres, digitoDos, digitoUno }) {
    return (
        <div className="Contador">
            <div className="Clock">
                <i className="fa-light fa-clock"></i>
            </div>
            <div className="cinco">{digitoCinco % 10}</div>
            <div className="cuatro">{digitoCuatro % 10}</div>
            <div className="tres">{digitoTres % 10}</div>
            <div className="dos">{digitoDos % 10}</div>
            <div className="uno">{digitoUno % 10}</div>
        </div>
    );
}
export default MiComponente;