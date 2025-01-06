import React, { useState } from "react";
import './Calculator.css';
function Calculator(){
    
        const [mode, setMode] = useState('Population');
        const [initial_time, setInitial_time] = useState(0);
        const [initial_population, setInitial_population] = useState();
        const [second_time, setSecond_time] = useState();
        const [second_population, setSecond_population] = useState();
        const [required, setRequired] = useState();
            let [C, setC] = useState();
            let [k, setK] = useState();
            let [result, setResult] = useState();

                function changeMode(event){
                    setMode(event.target.value);
                    handleClear();
                }
                function changeintialtime(event) {
                    setInitial_time(event.target.value);
                }
                function changeintialpopulation(event) {
                    setInitial_population(event.target.value);
                }
                function changesecondtime(event) {
                    setSecond_time(event.target.value);
                }
                function changesecondpopulation(event) {
                    setSecond_population(event.target.value);
                }
                function changerequired(event) {
                    setRequired(event.target.value);
                }
                function changeC(event) {
                    setC(event.target.value);
                }
                function changeK(event) {
                    setK(event.target.value);
                }

                    function handelSolve(){
                        const euler = Math.E;
                        const t0 = parseFloat(initial_time);// somehow useless since default time is 0;
                        const P0 = parseFloat(initial_population);
                        const t1 = parseFloat(second_time);
                        const P1 = parseFloat(second_population);
                        const req = parseFloat(required);
                            
                            if(t0 !== 0){
                            alert('LIMITATIONS:\n t0 is set on default value: 0');
                                return;
                            }
                            
                            if (!initial_population || !second_time || !second_population || !required) {
                                alert('Please fill all the input fields');
                                return;
                            }
                            
                                if(mode === 'Population'){
                                    C = P0;
                                    k = Math.log(P1 / C) /t1;
                                    find = C * Math.pow(euler, (k*req));
                                        setC(C)
                                        setK(k)
                                        setResult(find);
                                }else if (mode === 'Time'){
                                    C = P0;
                                    k = Math.log(P1 / C) /t1;
                                    find = Math.log(req / C) / k;
                                        setC(C)
                                        setK(k)
                                        setResult(find);
                                } 
                    }
                    
                    function handleClear()  {
                        setInitial_time(0);
                        setInitial_population('');
                        setSecond_time('');
                        setSecond_population('');
                        setRequired('');
                        setC('');
                        setK('');
                        setResult('');
                    }
                
    return(
        <>
        <div className="calculator-container-overall">
        <div className="calculator-container">
            <h1>Calculator</h1>

            <select value={mode} onChange={changeMode}>
                <option value="Population">Population</option>
                <option value="Time">Time</option>
            </select>
    <br/>
            <label>t<sub>0</sub>: </label>
                <input value={initial_time} onChange = {changeintialtime} placeholder="0"/>
            <label>P<sub>0</sub>: </label>
                <input value={initial_population} onChange = {changeintialpopulation} placeholder="Enter value"/>
    <br/>
            <label>t<sub>1</sub>: </label>
                <input value={second_time} onChange = {changesecondtime} placeholder="Enter value"/>
            <label>P<sub>1</sub>: </label>
                <input value={second_population} onChange = {changesecondpopulation} placeholder="Enter value"/>           
    <br/>
             {/*Rquired time to get the Popluation*/}
             {mode === "Population" ? 
             (
                <>
                    <label>t<sub>req</sub>: </label>
                    <input value={required} onChange = {changerequired} placeholder="Enter value"/>
                </> 
             ) : ( 
                <>
                    <label>P<sub>req</sub>: </label>
                    <input value={required} onChange = {changerequired} placeholder="Enter value"/>
                </> 
             )
             } 
    <br/>
            <button type="button" className="solve" onClick={handelSolve}>Solve</button>
            <button type="button" className="clear" onClick={handleClear}>Clear</button>
    <br/>	
        </div>

        <div className="Solution">
            <p>

                <h1>Solution</h1>
            <h3 className="given">Given:</h3>

            <h4 className="Solution-given">
                <div className="row">
                    <p className="one">@ t<sub>0</sub> = {initial_time}</p>
                    <p className="two">P<sub>0</sub> = {initial_population}</p>
                </div>

                <div className="row">
                    <p className="one">@ t<sub>1</sub> = {second_time}</p>
                    <p className="two">P<sub>1</sub> = {second_population}</p>
                </div>

                {mode === 'Population' ? (
                    <div className="row">
                        <p className="one">@ t<sub><i>req</i></sub> = {required}</p>
                        <p className="two">P<sub><i>Asked</i></sub> = ?</p>
                    </div>
                ) : (
                    <div className="row">
                        <p className="one">@ P<sub><i>req</i></sub> = {required}</p>
                        <p className="two">t<sub><i>Asked</i></sub> = ?</p>
                    </div>
                )}
            </h4>

                
    <br/>             
                <h3>Step 1: Find the C</h3>
    <br/>
                    <h4 className="answers">C: {C}</h4>                
    <br/> 
                <h3>Step 2: Find the k</h3>
    <br/>
                    <h4 className="answers">k: {k}</h4>                
    <br/> 
                {mode === 'Population' ? (
                    <h3>Step 3: Find the P<sub>Asked</sub></h3>    
                ):(
                    <h3>Step 3: Find the T<sub><i>Asked</i></sub></h3>    
                )}
    <br/>   
                    <h4 className="answers">Answer: {result}</h4>
    
            </p>

        </div>
    </div>
        </>
    );
}
export default Calculator;