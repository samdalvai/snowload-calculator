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
                    <SnowLoadCalculatorCard body={<SnowLoadCalculationForm onCompute={console.log}/>}/> :
                    <SnowLoadCalculatorCard body={<SnowLoadResultsForm roofData={defaultRoofData()}
                                                                       onBack={() => setComputed(false)}/>}/>
            }
        </div>
    );
}

export default App;