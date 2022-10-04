import './App.css';
import {SnowLoadCalculationForm} from "./components/form/SnowLoadCalculationForm";
import {SnowLoadCalculatorCard} from "./components/card/SnowLoadCalculatorCard";
import React from "react";

function App() {
    return (
        <div className="container p-2">
            <SnowLoadCalculatorCard body={<SnowLoadCalculationForm onCompute={console.log}/>} />
        </div>
    );
}

export default App;