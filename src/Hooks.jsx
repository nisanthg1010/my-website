import React, { useState, useEffect } from 'react';

const Hooks = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Count has been updated to: ${count}`);
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Hooks useEffect count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Hooks;