import React, { useEffect, useState } from "react";

function MiComponente() {
    //{ digitoCinco, digitoCuatro, digitoTres, digitoDos, digitoUno }) {
    const [counter, setCounter] = useState(0);
    const [IsRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let interval;
        if (IsRunning) {
            interval = setInterval(() => {
                setCounter(prevCounter => prevCounter + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [IsRunning]);

    // Funciones de control en botones
    const handlePause = () => setIsRunning(false);
    const handleResume = () => setIsRunning(true);
    const handleReset = () => {
        setCounter(0);
        setIsRunning(true);
    };

    // Presentación de digitos del contador
    const cinco = Math.floor(counter / 10000);
    const cuatro = Math.floor(counter / 1000) % 10;
    const tres = Math.floor(counter / 100) % 10;
    const dos = Math.floor(counter / 10) % 10;
    const uno = Math.floor(counter % 10);

    return (
        <>
            <div className="Contador">
                <div className="Clock">
                    <i className="fa-solid fa-clock"></i>
                </div>
                <div className="cinco">{cinco}</div>
                <div className="cuatro">{cuatro}</div>
                <div className="tres">{tres}</div>
                <div className="dos">{dos}</div>
                <div className="uno">{uno}</div>
            </div>

            <div className="controles">
                <button className="btn btn-danger" onClick={handlePause}>Pausar</button>
                <button className="btn btn-success" onClick={handleResume}>Reanudar</button>
                <button className="btn btn-warning" onClick={handleReset}>Reiniciar</button>
            </div>
        </>
    );
}

export default MiComponente;