import React from "react";

export const TitleCard = ({title}: {title: string}) => {
    return (
        <div className={"card text-center shadow-sm rounded snowload-lightgrey-background"}>
            <h1 className={"snowload-blue bold p-1"}>
                {
                    title
                }
            </h1>
        </div>
    )
}