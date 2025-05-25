import React from 'react';

const WaveDotsSpinner = ({ dotSize = '15px' }) => {
    const dotStyle = {width: dotSize, height: dotSize,};

    return (
        <div className="wave-dots-spinner">
            {[0, 1, 2, 3].map((index) => (
                <div
                    key={index}
                    className="wave-dot"
                    style={{...dotStyle, animationDelay: `${index * 0.15}s`,}}
                ></div>
            ))}
        </div>
    );
};

export default WaveDotsSpinner;