import React, { useState } from 'react';

const CardMyImage = ({ primarySrc, backupSrc, alt, ...props }) => {
    const [src, setSrc] = useState(primarySrc);

    const handleError = () => {
        if (src === primarySrc) {
            setSrc(backupSrc);
        }
    };

    return (
        <Card.Img
            src={src}
            alt={alt}
            onError={handleError}
            {...props}
        />
    );
};

export default CardMyImage;