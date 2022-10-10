import React from "react";

export const ResizeableImageContainer = ({url, alt, scale}: {url: string, alt?: string, scale: string}) => {
    return (
        <div className="image-container" style={{scale: scale}}>
            <img src={url} alt={alt} />
        </div>
    )
}