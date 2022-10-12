import {BackButton} from "../button/BackButton";
import {Callback} from "../../functions/callbacks";
import {useKeyBoardPress} from "../../functions/hooks/useKeyBoardPress";

export const SnowRetainersForm = ({onBack}: {onBack: Callback}) => {
    useKeyBoardPress(["Backspace"], onBack)

    return (
        <div>
            <BackButton onBack={onBack} />
        </div>
    )
}