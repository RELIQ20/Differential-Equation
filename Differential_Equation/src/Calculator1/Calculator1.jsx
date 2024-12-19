import React, { useState } from "react";
import './Calculator1.css';

export default function Calculator1(){
        const [mode, setMode] = useState();
        const [initialTime, setinitialTime] = useState();
        const [initialTemperature, setinitialTemprature] = useState();
        const [AmbientTemperature, setAmbientTemperature] = useState();
        const [nextTime, setnextTime] = useState();
        const [nextTemperature, setnextTemperature] = useState();
        const [required, setRequired] = useState();

            let [C, setC] = useState();
            let [K, setK] = useState();
            let [Answer, setAnswer] = useState();

                function handlemodechange(event) {
                    setMode(event.target.value);
                    handleClear();
                }
                
                function handleinitialTimeChange(event) {
                    setinitialTime(event.target.value);
                }
                
                function handleinitialTemperatureChange(event) {
                    setinitialTemprature(event.target.value);
                }
                
                function handleambientTemperatureChange(event) {
                    setAmbientTemperature(event.target.value);
                }
                
                function handlenextTimeChange(event) {
                    setnextTime(event.target.value);
                }
                
                function handlenextTemperatureChange(event) {
                    setnextTemperature(event.target.value);
                }
                
                function handlerequiredChange(event) {
                    setRequired(event.target.value);
                }
                
                    function handleCalculate(){
                    const e = Math.E;
                    const t0 = parseFloat(initialTime);
                    const T0 = parseFloat(initialTemperature);
                    const Tm = parseFloat(AmbientTemperature);
                    const t1 = parseFloat(nextTime);
                    const T1 = parseFloat(nextTemperature);
                    const treq = parseFloat(required);

                    if (!initialTime || !initialTemperature || !AmbientTemperature || !nextTime|| !nextTemperature || !required) {
                        alert('Please fill all the input fields');
                        return;
                    }

                    if (mode === "Temperature") {
                        C = T0 - Tm;
                        K = Math.log((T1 -  Tm) / C /(t1 - t0));
                        Answer = Tm + C * Math.pow(e, (K* (treq)));

                        setC(C);
                        setK(K);
                        setAnswer(Answer);
                    }else if(mode === "Time"){
                        C = T0 - Tm;
                        K = Math.log(((T1 - Tm) / C )) / (t1 - t0);
                        Answer = Math.log((treq - Tm) / C) / K;
                        
                        setC(C);
                        setK(K);
                        setAnswer(Answer);
                        }
                    }

                    function handleClear(){
                        setinitialTime('');
                        setinitialTemprature('');
                        setAmbientTemperature('');
                        setnextTime('');
                        setnextTemperature('');
                        setRequired('');
                        setC('');
                        setK('');
                        setAnswer('')
                    };
        
    return(
    <>
        <div className="calculator1-container">

            <div className="calculator">
        
                <h1>Calculator</h1>

                    <select value={mode} onChange={handlemodechange}>
                        <option value="Temperature">Temperature</option>
                        <option value="Time">Time</option>
                    </select>

                <br/>

                        <div className="input-container">
                                <label>T<sub>m</sub>: </label>
                                <input value={AmbientTemperature} onChange={handleambientTemperatureChange}/>
                            
                            <br/>

                                <label>t<sub>0</sub>: </label>
                                <input value={initialTime} onChange={handleinitialTimeChange}/>

                                <label>T<sub>0</sub>: </label>
                                <input value={initialTemperature} onChange={handleinitialTemperatureChange}/>

                            <br/>
                            
                                <label>t<sub>1</sub>: </label>
                                <input value={nextTime} onChange={handlenextTimeChange}/>

                                <label>T<sub>1</sub>: </label>
                                <input value={nextTemperature} onChange={handlenextTemperatureChange}/>
                            
                            <br/>

                                {mode === 'Temperature' ? 
                                    (
                                    <>
                                        <label>t<sub>req</sub>: </label>
                                        <input value={required} onChange={handlerequiredChange}/>
                                        
                                    </>
                                    ) : (   
                                    <>
                                        <label>T<sub>req</sub>: </label>
                                        <input value={required} onChange={handlerequiredChange}/>
                                    </>
                                    )
                                }

                        </div>

                    <div className="buttons">
                        <button onClick={handleCalculate}>submit</button>
                        <button onClick={handleClear}>clear</button>
                    </div>
            </div>
{/*Solution ni nga part */}
            <div className="Solution1-container">
                <h1>Solution</h1><br/>
                <h3>Given:</h3>
                    <div className="row">
                        <p className="center">T<sub>m</sub> = {AmbientTemperature}</p>
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
            <br/>
                    <p>
                        <h3>Step 1: Find the C</h3><br/>
                            <h4 className="answers">C: {C}</h4><br/>                
                        <h3>Step 2: Find the k</h3><br/>
                            <h4 className="answers">k: {K}</h4><br/> 
                        {mode === "Temperature" ? (
                            <h3>Step 3: Find the T<sub>Asked</sub></h3>    
                        ):(
                            <h3>Step 3: Find the t<sub>Asked</sub></h3>    
                        )}
                        <br/>   
                            <h4 className="answers">Answer: {Answer} </h4>
                    </p>
            </div>
        </div>  
    </>
    );
};