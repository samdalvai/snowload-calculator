import {Callback} from "../../functions/callbacks";
import React, {useState} from "react";
import {
    Holder,
    Retainer,
    RetainerHeight,
    RetainerMaterial,
    RetainerType,
    RoofData,
    RoofType,
    SnowLoadData
} from "../../functions/types";
import {SnowLoadTablesForm} from "./SnowLoadTablesForm";
import {SnowRetainersForm} from "./SnowRetainersForm";
import {SnowLoadProductContext} from "../context/SnowLoadProductContext";
import {SnowLoadSummaryForm} from "./SnowLoadSummaryForm";

export const SnowLoadResultsForm = ({roofData, snowLoadData, onBack, onHome}:
                                        { roofData: RoofData | null, snowLoadData: SnowLoadData, onBack: Callback, onHome: Callback }) => {
    const [showRetainersForm, setShowRetainersForm] = useState<boolean>(false)
    const [showSummaryForm, setShowSummaryForm] = useState<boolean>(false)

    const [roofType, setRoofType] = useState<RoofType>("concreteTile")
    const [retainerType, setRetainerType] = useState<RetainerType>("Grid")
    const [retainerHeight, setRetainerHeight] = useState<RetainerHeight>("200")
    const [retainerMaterial, setRetainerMaterial] = useState<RetainerMaterial>("Zink Steel")
    const [rows, setRows] = useState<number>(1)

    const [holder, setHolder] = useState<Holder | null>(null)
    const [retainer, setRetainer] = useState<Retainer | null>(null)

    const [holderDistance, setHolderDistance] = useState<number | null>(null)
    const [retainerDistance, setRetainerDistance] = useState<number | null>(null)

    return (
        <div>
            {
                !showRetainersForm ?
                    <SnowLoadTablesForm
                        roofData={roofData}
                        snowLoadData={snowLoadData}
                        onBack={onBack}
                        onAhead={() => setShowRetainersForm(true)}/>
                    :
                    <SnowLoadProductContext.Provider value={{roofType, retainerType, retainerHeight, retainerMaterial, rows, holder, retainer, holderDistance, retainerDistance,
                        setRoofType, setRetainerType, setRetainerHeight, setRetainerMaterial, setRows, setHolder, setRetainer, setHolderDistance, setRetainerDistance}}>
                        {
                            showSummaryForm ?
                                <SnowLoadSummaryForm
                                    onBack={() => setShowSummaryForm(false)}
                                    roofData={roofData}
                                    snowLoadData={snowLoadData}
                                    onHome={onHome}/>
                                    :
                                <SnowRetainersForm
                                    linearLoad={snowLoadData.linearLoad}
                                    onBack={() => setShowRetainersForm(false)}
                                    onAhead={() => setShowSummaryForm(true)}/>

                        }
                    </SnowLoadProductContext.Provider>
            }
        </div>
    )
}
