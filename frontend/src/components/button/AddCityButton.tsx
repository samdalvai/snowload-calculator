import {Callback} from "../../functions/callbacks";
import {ButtonWithIcon} from "./ButtonWithIcon";
import React, {useContext} from "react";
import {HomeIcon} from "@primer/octicons-react";
import {LanguageContext} from "../language/LanguageContext";

export const AddCityButton = ({onAddCity}: {onAddCity: Callback}) => {
    const {translation} = useContext(LanguageContext);

    return (
        <ButtonWithIcon icon={<HomeIcon size={20}/>}
                        type={"primary"}
                        text={translation.buttons.addCity}
                        onClick={onAddCity}/>
    )
}