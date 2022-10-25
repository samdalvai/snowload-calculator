import React, {ReactElement} from "react";

export const ButtonsGroup = ({leftButton,rightButton}:
                                { leftButton: ReactElement, rightButton: ReactElement }) => {
    return (
        <div className="row">
            <div className="col-md-6 pt-3">
                {leftButton}
            </div>
            <div className="col-md-6 pt-3">
                {rightButton}
            </div>
        </div>
    )
}

export const ButtonsGroupSmall = ({leftButton,rightButton}:
                                 { leftButton: ReactElement, rightButton: ReactElement }) => {
    return (
        <div className="row">
            <div className="col-6 pe-2">
                {leftButton}
            </div>
            <div className="col-6 ps-2">
                {rightButton}
            </div>
        </div>
    )
}