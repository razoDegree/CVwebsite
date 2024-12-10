import React from 'react';

const CurvedText = () => {
    const text = "Let's  Talk  ";

    const letters = text.split('');
    const angle = 360 / letters.length;

    return (
        <div className="curve-container">
            {letters.map((letter, index) => {
                const rotateAngle = angle * index;
                return (
                    <span
                        key={index}
                        style={{
                            width: '1vw', /* Adjust based on the desired circle size */
                            margin: '2.75vh 2vw', /* Center the circle */
                            height: '3.75vh',
                            transform: `rotate(${rotateAngle}deg) translateY(-50px)`,
                            position: 'absolute',
                            bottom: '6vh',
                            right: '6vw',
                            transformOrigin: 'center',
                            whiteSpace: 'nowrap',
                            zIndex: '1',
                        }}
                    >
                        {letter}
                    </span>
                );
            })}
        </div>
    );
};

export default CurvedText;
