import {Callback} from "../../functions/callbacks";
import {ButtonWithIcon} from "./ButtonWithIcon";
import React from "react";
import {HomeIcon} from "@primer/octicons-react";

export const AddCityButton = ({onAddCity}: {onAddCity: Callback}) => {
    return (
        <ButtonWithIcon icon={<HomeIcon size={20}/>}
                        type={"primary"}
                        text={"Add City"}
                        onClick={onAddCity}/>
    )
}