import React, {useState} from "react";
import {defaultSnowLoadData, Province, RoofData, SnowLoadData} from "../../functions/types";
import {getGroundLoad, getLinearLoad, getRoofLoad} from "../../functions/computation/snowLoadComputation";
import {SnowLoadCalculatorCard} from "../card/SnowLoadCalculatorCard";
import {SnowLoadCalculationForm} from "./SnowLoadCalculationForm";
import {SnowLoadResultsForm} from "./SnowLoadResultsForm";
import {SnowLoadCalculatorContainer} from "../container/SnowLoadCalculatorContainer";

export const SnowLoadForm = () => {
    const [computed, setComputed] = useState<boolean>(false)
    const [roofData, setRoofData] = useState<RoofData | null>(null)
    const [snowLoadData, setSnowLoadData] = useState<SnowLoadData>(defaultSnowLoadData)
    const [error, setError] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const handleOnCompute = async (data: RoofData) => {
        setLoading(true)
        await fetch('/provinces/shorthand/' + data.city.province, {
            method: 'GET'
        }).then(async (response) => {
            const province: Province = await response.json();

            if (response.status === 201 || response.status === 200) {
                console.log("Computing new snowload for: " + province.shorthand + " " + data.city.name)
                computeSnowLoads(data, province)
                setError(false)
            } else {
                setError(true)
            }
        })
        setLoading(false)
    }

    const computeSnowLoads = (roofData: RoofData, province: Province) => {
        const groundLoad: number = getGroundLoad(roofData.city, province)
        const roofLoad: number = getRoofLoad(groundLoad)
        const linearLoad: number = getLinearLoad(roofLoad, roofData)

        setSnowLoadData({
            ...snowLoadData,
            zone: province.zone,
            groundLoad: groundLoad,
            roofLoad: roofLoad,
            linearLoad: linearLoad
        })
    }

    return (
        <div>
            <SnowLoadCalculatorContainer body={
                !computed ?
                    <SnowLoadCalculationForm roofData={roofData}
                                             onCompute={data => {
                                                 setRoofData(data)
                                                 setComputed(true)
                                                 handleOnCompute(data)
                                             }}/> :
                    <SnowLoadResultsForm roofData={roofData}
                                         snowLoadData={snowLoadData}
                                         error={error}
                                         loading={loading}
                                         onBack={() => setComputed(false)}
                    />
            }/>
        </div>
    )
}
