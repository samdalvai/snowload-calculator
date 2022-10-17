import React from "react";

export const TitleCard = ({title}: {title: string}) => {
    return (
        <div className={"top-bottom-border-black text-center shadow-sm snowload-lightgrey-background"}>
            <h3 className={"bold p-2"}>
                {
                    title
                }
            </h3>
        </div>
    )
}