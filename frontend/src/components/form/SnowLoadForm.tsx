import React, {useState} from "react";
import {City, defaultRoofData, defaultSnowLoadData, Province, RoofData, SnowLoadData} from "../../functions/types";
import {getGroundLoad, getRoofLoad} from "../../functions/computation/snowLoadComputation";
import {SnowLoadCalculatorCard} from "../card/SnowLoadCalculatorCard";
import {SnowLoadCalculationForm} from "./SnowLoadCalculationForm";
import {SnowLoadResultsForm} from "./SnowLoadResultsForm";

export const SnowLoadForm = () => {
    const [computed, setComputed] = useState<boolean>(false)
    const [roofData, setRoofData] = useState<RoofData | null>(null)
    const [snowLoadData, setSnowLoadData] = useState<SnowLoadData>(defaultSnowLoadData)
    const [error, setError] = useState<boolean>(false)

    const handleOnCompute = async (city: City) => {
        await fetch('/provinces/shorthand/' + city.province, {
            method: 'GET'
        }).then(async (response) => {
            const province: Province = await response.json();

            if (response.status === 201 || response.status === 200) {
                console.log("Computing new snowload for: " + province.shorthand + " " + city.name)
                computeSnowLoads(city, province)
                setError(false)
            } else {
                setError(true)
            }
        })
    }

    const computeSnowLoads = (city: City, province: Province) => {
        const groundLoad: number = getGroundLoad(city, province)
        const roofLoad: number = getRoofLoad(groundLoad)

        setSnowLoadData({...snowLoadData,
            zone: province.zone,
            groundLoad: groundLoad,
            roofLoad: roofLoad
        })
    }

    return (
        <div>
            {
                !computed ?
                    <SnowLoadCalculatorCard body={
                        <SnowLoadCalculationForm roofData={roofData}
                                                 onCompute={data => {
                                                     setRoofData(data)
                                                     setComputed(true)
                                                     handleOnCompute(data.city)
                                                 }}/>}/> :
                    <SnowLoadCalculatorCard body={
                        <SnowLoadResultsForm roofData={roofData}
                                             snowLoadData={snowLoadData}
                                             error={error}
                                             onBack={() => setComputed(false)}
                        />}/>
            }
        </div>
    )
}
