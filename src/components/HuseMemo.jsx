import React, { useState, useMemo } from 'react';

function slowFunction(num) {
    console.log('Calling slow function');
    for (let i = 0; i <= 1000000000; i++) {} 
    return num * 2;
}
const HuseMemo = () => {
    const [number, setNumber] = useState(0);
    const [theme, setTheme] = useState('light');

    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
            <h1>Hooks UseMemo</h1>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            <button onClick={toggleTheme}>Change Theme</button>
            <div>Double: {doubleNumber}</div>
        </div>
    );
};

export default HuseMemo;