import {ButtonWithIcon} from "./ButtonWithIcon";
import {ArrowLeftIcon} from "@primer/octicons-react";
import React, {useContext} from "react";
import {Callback} from "../../functions/callbacks";
import {LanguageContext} from "../language/LanguageContext";

export const BackButton = ({onBack}: { onBack: Callback }) => {
    const {translation} = useContext(LanguageContext);

    return (
        <ButtonWithIcon icon={<ArrowLeftIcon size={22}/>}
                        type={"primary"}
                        text={translation.buttons.back}
                        onClick={onBack}/>
    )
}