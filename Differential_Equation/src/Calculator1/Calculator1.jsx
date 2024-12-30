import React, { useState } from "react";
import './Calculator1.css';

export default function Calculator1() {
    const [mode, setMode] = useState('Temperature'); // Default to Temperature
    const [initialTime, setInitialTime] = useState(0);
    const [initialTemperature, setInitialTemperature] = useState('');
    const [ambientTemperature, setAmbientTemperature] = useState('');
    const [nextTime, setNextTime] = useState('');
    const [nextTemperature, setNextTemperature] = useState('');
    const [required, setRequired] = useState('');

    let [C, setC] = useState(0);
    let [K, setK] = useState(0);
    let [Answer, setAnswer] = useState('');

        function handleModeChange(event) {
            setMode(event.target.value);
            handleClear();
        }

        function handleInitialTimeChange(event) {
            setInitialTime(event.target.value);
        }

        function handleInitialTemperatureChange(event) {
            setInitialTemperature(event.target.value);
        }

        function handleAmbientTemperatureChange(event) {
            setAmbientTemperature(event.target.value);
        }

        function handleNextTimeChange(event) {
            setNextTime(event.target.value);
        }

        function handleNextTemperatureChange(event) {
            setNextTemperature(event.target.value);
        }

        function handleRequiredChange(event) {
            setRequired(event.target.value);
        }

            function handleCalculate() {
                const e = Math.E;
                const t0 = parseFloat(initialTime);
                const T0 = parseFloat(initialTemperature);
                const Tm = parseFloat(ambientTemperature);
                const t1 = parseFloat(nextTime);
                const T1 = parseFloat(nextTemperature);
                const treq = parseFloat(required);

                    if (t0 !== 0) {
                        alert('The initial time (t₀) must be 0.');
                        return;
                    }
                    if (isNaN(t0) || isNaN(T0) || isNaN(Tm) || isNaN(t1) || isNaN(T1) || isNaN(treq)) {
                        alert('Please fill all fields with valid numbers.');
                        return;
                    }

                let C = T0 - Tm;
                let K = Math.log((T1 - Tm) / C) / (t1 - t0);
                let Answer;

                    if (mode === 'Temperature') {
                        Answer = Tm + C * Math.pow(e, K * treq);
                    } else if (mode === 'Time') {
                        Answer = Math.log((treq - Tm) / C) / K;
                    }

                setC(C);
                setK(K);
                setAnswer(Answer); 
            }

            function handleClear() {
                setInitialTime(0);
                setInitialTemperature('');
                setAmbientTemperature('');
                setNextTime('');
                setNextTemperature('');
                setRequired('');
                setC('');
                setK('');
                setAnswer('');
            }

    return (
        <>
            <div className="calculator1-container">
                <div className="calculator">
                    <h1>Calculator</h1>

                    <select value={mode} onChange={handleModeChange}>
                        <option value="Temperature">Temperature</option>
                        <option value="Time">Time</option>
                    </select>

                    <br />

                    <div className="input-container">
                        <label>T<sub>m</sub>: </label>
                        <input value={ambientTemperature} onChange={handleAmbientTemperatureChange} placeholder="Enter value" />

                        <br />

                        <label>t<sub>0</sub>: </label>
                        <input value={initialTime} onChange={handleInitialTimeChange} placeholder="0" />

                        <label>T<sub>0</sub>: </label>
                        <input value={initialTemperature} onChange={handleInitialTemperatureChange} placeholder="Enter value" />

                        <br />

                        <label>t<sub>1</sub>: </label>
                        <input value={nextTime} onChange={handleNextTimeChange} placeholder="Enter value" />

                        <label>T<sub>1</sub>: </label>
                        <input value={nextTemperature} onChange={handleNextTemperatureChange} placeholder="Enter value" />

                        <br />

                        {mode === 'Temperature' ? (
                            <>
                                <label>t<sub>req</sub>: </label>
                                <input value={required} onChange={handleRequiredChange} placeholder="Enter value" />
                            </>
                        ) : (
                            <>
                                <label>T<sub>req</sub>: </label>
                                <input value={required} onChange={handleRequiredChange} placeholder="Enter value" />
                            </>
                        )}
                    </div>

                    <div className="buttons">
                        <button onClick={handleCalculate}>Solve</button>
                        <button onClick={handleClear}>Clear</button>
                    </div>
                </div>

                <div className="Solution1-container">
                    <h1>Solution</h1>
                <br/>
                    <h3>Given:</h3>
                    <div className="row">
                        <p className="center">T<sub>m</sub> = {ambientTemperature}</p>
                    </div>

                    <div className="row">
                        <p className="one">@ t<sub>0</sub> = {initialTime}</p>
                        <p className="two">T<sub>0</sub> = {initialTemperature}</p>
                    </div>

                    <div className="row">
                        <p className="one">@ t<sub>1</sub> = {nextTime}</p>
                        <p className="two">T<sub>1</sub> = {nextTemperature}</p>
                    </div>

                    {mode === 'Temperature' ? (
                        <div className="row">
                            <p className="one">@t<sub><i>req</i></sub> = {required}</p>
                            <p className="two">T<sub><i>Asked</i></sub> = ?</p>
                        </div>
                    ) : (
                        <div className="row">
                            <p className="one">@T<sub><i>req</i></sub> = {required}</p>
                            <p className="two">t<sub><i>Asked</i></sub> = ?</p>
                        </div>
                    )}
                    <br />
                    <p>
                        <h3>Step 1: Find the C</h3>
                    <br />
                        <h4 className="answers">C: {C}</h4>
                    <br />
                        <h3>Step 2: Find the k</h3>
                    <br />
                        <h4 className="answers">k: {K}</h4>
                    <br />
                        {mode === "Temperature" ? (
                            <h3>Step 3: Find the T<sub>Asked</sub></h3>
                        ) : (
                            <h3>Step 3: Find the t<sub>Asked</sub></h3>
                        )}
                    <br />
                        <h4 className="answers">Answer: {Answer}</h4>
                    </p>
                </div>
            </div>
        </>
    );
}
