import {Callback} from "../../functions/callbacks";
import React, {useContext} from "react";
import {LanguageContext} from "../language/LanguageContext";
import {ButtonWithIcon} from "./ButtonWithIcon";
import {TrashIcon} from "@primer/octicons-react";

export const NewComputation = ({onNewComputation}: { onNewComputation: Callback }) => {
    const {translation} = useContext(LanguageContext);

    return (
        <ButtonWithIcon icon={<TrashIcon size={22}/>}
                        type={"secondary"}
                        text={translation.buttons.text.newComp}
                        onClick={onNewComputation}/>
    )
}