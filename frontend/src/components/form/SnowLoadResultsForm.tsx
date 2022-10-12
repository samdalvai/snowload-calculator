import {Callback} from "../../functions/callbacks";
import React, {useState} from "react";
import {RoofData, SnowLoadData} from "../../functions/types";
import {SnowLoadTablesForm} from "./SnowLoadTablesForm";
import {SnowRetainersForm} from "./SnowRetainersForm";

export const SnowLoadResultsForm = ({roofData, snowLoadData, error, loading, onBack}:
                                        { roofData: RoofData | null, snowLoadData: SnowLoadData, error: Boolean, loading: boolean, onBack: Callback }) => {
    const [showRetainersForm, setShowRetainersForm] = useState<boolean>(false)

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
                    <SnowRetainersForm  onBack={() => setShowRetainersForm(false)}/>
            }
        </div>
    )
}
