import React from "react";

export const SnowLoadLogo = ({text}: {text: String}) => {
    return (
        <h1 className={"white text-shadow px-sm-1 px-md-2 px-lg-3"} >
            <strong>
                {text}
            </strong>
        </h1>
    )
}