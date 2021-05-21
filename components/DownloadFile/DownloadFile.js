import React from "react";

const DownloadFile = ({children, src}) => {
    return (
        <a href={src} style={{color: "white"}} download>{children}</a>
    )
}

export default DownloadFile;