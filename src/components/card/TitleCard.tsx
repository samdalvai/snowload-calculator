import React from "react";

export const TitleCard = ({title}: { title: string }) => {
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

export const TitleCardSmall = ({title}: { title: string }) => {
    return (
        <div className={"top-bottom-border-black text-center shadow-sm snowload-lightgrey-background"}>
            <h5 className={"bold p-2"}>
                {
                    title
                }
            </h5>
        </div>
    )
}
