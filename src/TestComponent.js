import React from 'react';
import Radium from 'radium';

const TestComponent = () => {
    const myStyle = {
        ":hover": { color: 'green' },
    };
    return (
        <div style={myStyle}>
            This is a test component
        </div>
    );
};

export default Radium(TestComponent);