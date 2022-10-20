import {Callback} from "../../functions/callbacks";
import React, {useState} from "react";
import {Holder, Retainer, RetainerHeight, RetainerType, RoofData, RoofType, SnowLoadData} from "../../functions/types";
import {SnowLoadTablesForm} from "./SnowLoadTablesForm";
import {SnowRetainersForm} from "./SnowRetainersForm";
import {SnowLoadProductContext} from "../context/SnowLoadProductContext";

export const SnowLoadResultsForm = ({roofData, snowLoadData, error, loading, onBack}:
                                        { roofData: RoofData | null, snowLoadData: SnowLoadData, error: Boolean, loading: boolean, onBack: Callback }) => {
    const [showRetainersForm, setShowRetainersForm] = useState<boolean>(false)

    const [roofType, setRoofType] = useState<RoofType>("concreteTile")
    const [retainerType, setRetainerType] = useState<RetainerType>("Grid")
    const [retainerHeight, setRetainerHeight] = useState<RetainerHeight>("200")
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
                        error={error}
                        loading={loading}
                        onBack={onBack}
                        onAhead={() => setShowRetainersForm(true)}/>
                    :
                    <SnowLoadProductContext.Provider value={{roofType, retainerType, retainerHeight, rows, holder, retainer, holderDistance, retainerDistance,
                        setRoofType, setRetainerType, setRetainerHeight, setRows, setHolder, setRetainer, setHolderDistance, setRetainerDistance}}>
                        <SnowRetainersForm linearLoad={snowLoadData.linearLoad}
                                           onBack={() => setShowRetainersForm(false)}/>
                    </SnowLoadProductContext.Provider>
            }
        </div>
    )
}
