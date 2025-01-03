import React, { useContext, useState } from 'react';
import { nameContext } from './Nisanth';

const Stomach = () => {
    let name = useContext(nameContext);
    const [color, setColor] = useState('black');
    const [bgColor, setBgColor] = useState('lightgrey');

    const changeColor = () => {
        setColor(color === 'black' ? 'blue' : 'black');
    };

    const changeBgColor = () => {
        setBgColor(bgColor === 'lightgrey' ? 'yellow' : 'lightgrey');
    };

    return (
        <div>
            <div style={{ backgroundColor: bgColor, height: '100px', width: '100px' }}></div>
            <div>
                <h1 style={{ color: color }}>Stomach</h1>
                <p style={{ color: color }}>This is the Stomach component.</p>
                <p style={{ color: color }}>The background color of the stomach is {bgColor}.</p>
                <h2 style={{ color: color }}>Stomach = {name}</h2>
                <button onClick={changeColor}>Change Colour</button>
                <button onClick={changeBgColor}>Change Background Colour</button>
            </div>
        </div>
    );
};

export default Stomach;