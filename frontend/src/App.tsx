import './App.css';
import {SnowLoadCalculationForm} from "./components/form/SnowLoadCalculationForm";
import {SnowLoadCalculatorCard} from "./components/card/SnowLoadCalculatorCard";
import React, {useState} from "react";
import {SnowLoadResultsForm} from "./components/form/SnowLoadResultsForm";
import {
    City,
    defaultCity,
    defaultRoofData,
    defaultSnowLoadData,
    Province,
    RoofData,
    SnowLoadData
} from "./functions/types";
import {getGroundLoad} from "./functions/computation/snowLoadComputation";

function App() {
    const [computed, setComputed] = useState<boolean>(false)
    const [roofData, setRoofData] = useState<RoofData>(defaultRoofData)
    const [snowLoadData, setSnowLoadData] = useState<SnowLoadData>(defaultSnowLoadData)
    const [error, setError] = useState<boolean>(false)

    const handleOnCompute = async (city: City) => {
        console.log("City: ", city.province)
        await fetch('/provinces/shorthand/' + city.province, {
            method: 'GET'
        }).then(async (response) => {
            if (response.status === 201 || response.status === 200) {
                const province: Province = await response.json();
                computeSnowLoads(roofData.city, province)
                setError(false)
            } else {
                setError(true)
            }
        })
    }

    const computeSnowLoads = (city: City, province: Province) => {
        setSnowLoadData({...snowLoadData,
            zone: province.zone,
            groundLoad: getGroundLoad(city, province)})
    }

    return (
        <div className="container p-2">
            {
                !computed ?
                    <SnowLoadCalculatorCard body={
                        <SnowLoadCalculationForm roofData={roofData}
                                                 onCompute={data => {
                                                     setRoofData(data)
                                                     setComputed(true)
                                                     handleOnCompute(data.city ? data.city : defaultCity())
                                                 }}/>}/> :
                    <SnowLoadCalculatorCard body={
                        <SnowLoadResultsForm roofData={roofData}
                                             snowLoadData={snowLoadData}
                                             onBack={() => setComputed(false)}/>}/>
            }
        </div>
    );
}

export default App;