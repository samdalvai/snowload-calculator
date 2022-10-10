import {Callback} from "../../functions/callbacks";
import {SnowFlakeIcon} from "../icon/SnowFlakeIcon";
import React, {useContext} from "react";
import {ButtonWithIcon} from "./ButtonWithIcon";
import {LanguageContext} from "../language/LanguageContext";

export const ComputeButton = ({onCompute}: { onCompute: Callback }) => {
    const {translation} = useContext(LanguageContext);

    return (
        <ButtonWithIcon icon={<SnowFlakeIcon size={22}/>}
                        type={"primary"}
                        text={translation.buttons.compute}
                        onClick={onCompute}/>
    )
}