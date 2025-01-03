import React, { useState } from 'react';

function Console() {
    let [count, setCount] = useState('NISANTH');
    let Nisa = () => {
        console.log(count);
    }
    return (
        <div>
            <h1>Name is:{count}</h1>
            <input type="text" value={count} onChange={(e)=> setCount(e.target.value)} />
            <button onClick={Nisa}>print the output in console</button>
        </div>
    );
}

export default Console;