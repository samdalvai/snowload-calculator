import React from "react";

export const ImageContainerRounded = ({url, alt}: {url: string, alt?: string}) => {
    return (
        <div className="img-fluid">
            <img src={url} className="rounded" alt={alt} />
        </div>
    )
}