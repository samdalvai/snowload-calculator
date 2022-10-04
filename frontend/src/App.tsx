import './App.css';
import {SnowLoadCalculationForm} from "./components/form/SnowLoadCalculationForm";
import {SnowLoadCalculatorCard} from "./components/card/SnowLoadCalculatorCard";
import React, {useState} from "react";
import {SnowLoadResultsForm} from "./components/form/SnowLoadResultsForm";
import {defaultRoofData, RoofData} from "./functions/types";

function App() {
    const [computed, setComputed] = useState<boolean>(false)
    const [roofData, setRoofData] = useState<RoofData>(defaultRoofData())

    return (
        <div className="container p-2">
            {
                computed ?
                    <SnowLoadCalculatorCard body={<SnowLoadCalculationForm onCompute={data => {
                        setRoofData(data)
                        setComputed(true)
                    }}/>}/> :
                    <SnowLoadCalculatorCard body={<SnowLoadResultsForm roofData={roofData}
                                                                       onBack={() => setComputed(false)}/>}/>
            }
        </div>
    );
}

export default App;