import React from "react";

const DownloadFile = ({children, src}) => {
    return (
        <a href={src} style={{color: "white", textDecoration:"none"}} download>{children}</a>
    )
}

export default DownloadFile;