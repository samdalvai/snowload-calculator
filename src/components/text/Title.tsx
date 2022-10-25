import React from "react";

export const Title = ({text}: {text: string}) => {
    return (
        <div className={"text-center"}>
            <h1 className={"snowload-blue bold"}>
                {text}
            </h1>
        </div>
    )
}