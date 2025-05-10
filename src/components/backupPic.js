import React, { useState } from 'react';

const MyImage = ({ primarySrc, backupSrc, alt, ...props }) => {
    const [src, setSrc] = useState(primarySrc);

    const handleError = () => {
        if (src === primarySrc) {
            setSrc(backupSrc);
        }
    };

    return (
        <img
            src={src}
            alt={alt}
            onError={handleError}
            {...props}
        />
    );
};

export default MyImage;