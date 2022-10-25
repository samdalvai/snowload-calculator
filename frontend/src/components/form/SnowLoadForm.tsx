import React, {useState} from "react";
import {Province, RoofData, SnowLoadData} from "../../functions/types";
import {getGroundLoad, getLinearLoad, getRoofLoad} from "../../functions/computation/snowLoadComputation";
import {SnowLoadCalculationForm} from "./SnowLoadCalculationForm";
import {SnowLoadResultsForm} from "./SnowLoadResultsForm";
import {SnowLoadCalculatorContainer} from "../container/SnowLoadCalculatorContainer";
import {defaultSnowLoadData} from "../../functions/defaultTypes";
import {provinces} from "../../data/provinces";

export const SnowLoadForm = () => {
    const [computed, setComputed] = useState<boolean>(false)
    const [roofData, setRoofData] = useState<RoofData | null>(null)
    const [snowLoadData, setSnowLoadData] = useState<SnowLoadData>(defaultSnowLoadData)

    const handleOnCompute = (data: RoofData) => {
        const province: Province = provinces.filter(pr => pr.shorthand === data.city.province)[0];
        computeSnowLoads(data, province)
    }

    const handleNewComputation = () => {
        setRoofData(null)
        setComputed(false)
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
                                         onBack={() => setComputed(false)}
                     onNewComputation={handleNewComputation}/>
            }/>
        </div>
    )
}
