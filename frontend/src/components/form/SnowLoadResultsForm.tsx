import {Callback} from "../../functions/callbacks";
import React, {useState} from "react";
import {RoofData, RoofType, SnowLoadData} from "../../functions/types";
import {SnowLoadTablesForm} from "./SnowLoadTablesForm";
import {SnowRetainersForm} from "./SnowRetainersForm";
import {SnowLoadProductContext} from "../context/SnowLoadProductContext";

export const SnowLoadResultsForm = ({roofData, snowLoadData, error, loading, onBack}:
                                        { roofData: RoofData | null, snowLoadData: SnowLoadData, error: Boolean, loading: boolean, onBack: Callback }) => {
    const [showRetainersForm, setShowRetainersForm] = useState<boolean>(false)
    const [roofTypeValue, setRoofTypeValue] = useState<RoofType>("concreteTile")


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
                    <SnowLoadProductContext.Provider value={{roofTypeValue, setRoofTypeValue}}>
                        <SnowRetainersForm linearLoad={snowLoadData.linearLoad}
                                           onBack={() => setShowRetainersForm(false)}/>
                    </SnowLoadProductContext.Provider>
            }
        </div>
    )
}
