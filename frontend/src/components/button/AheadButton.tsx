import {useContext} from "react";
import {LanguageContext} from "../language/LanguageContext";
import {ButtonWithIcon} from "./ButtonWithIcon";
import {ArrowRightIcon} from "@primer/octicons-react";
import {Callback} from "../../functions/callbacks";

export const AheadButton = ({onAhead}: { onAhead: Callback }) => {
    const {translation} = useContext(LanguageContext);

    return (
        <ButtonWithIcon icon={<ArrowRightIcon size={22}/>}
                        type={"primary"}
                        text={translation.buttons.text.ahead}
                        onClick={onAhead}/>
    )
}