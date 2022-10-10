import React from "react";

export const ResizeableImageContainer = ({url, alt, scale}: {url: string, alt?: string, scale: string}) => {
    return (
        <div className="img-fluid shadow-sm" style={{scale: scale}}>
            <img className={"all-border rounded-1"} src={url} alt={alt} />
        </div>
    )
}