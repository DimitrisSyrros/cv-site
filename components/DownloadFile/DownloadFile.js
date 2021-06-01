import React from "react";

const DownloadFile = ({children, src, styles}) => {
    return (
        <a href={src} style={styles} download>{children}</a>
    )
}

export default DownloadFile;