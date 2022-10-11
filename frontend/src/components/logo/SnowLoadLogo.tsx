import React from "react";

export const SnowLoadLogo = ({text}: {text: String}) => {
    return (
        <h1 className={"white text-shadow"} >
            <strong>
                {text}
            </strong>
        </h1>
    )
}