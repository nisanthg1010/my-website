import React, { useState, useRef } from 'react';

const HuseRef = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const handleClick = () => {
        setCount(count + 1);
        countRef.current += 1;
        console.log('State value:', count + 1);
        console.log('Ref value:', countRef.current);
    };

    return (
        <div>
            <h1>Hooks useRef and useState</h1>
            <p>Count (state): {count}</p>
            <p>Count (ref): {countRef.current}</p> 
            <button onClick={() => countRef.current += 1}>Increment Ref</button>
            <button onClick={handleClick}>+++</button>
        </div>
    );
};

export default HuseRef;