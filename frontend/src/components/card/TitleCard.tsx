import React from "react";

export const TitleCard = ({title}: {title: string}) => {
    return (
        <div className={"card all-border text-center shadow-sm rounded snowload-lightgrey-background"}>
            <h2 className={"snowload-blue bold p-1"}>
                {
                    title
                }
            </h2>
        </div>
    )
}