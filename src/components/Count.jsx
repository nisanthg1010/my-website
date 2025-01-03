import React, { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Nisanth');
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    
    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const setNameToNisanth = () => {
        setName('Nisanth');
    };

    
    const handleNum1Change = (event) => {
        setNum1(parseInt(event.target.value) || 0);
    };

    const handleNum2Change = (event) => {
        setNum2(parseInt(event.target.value) || 0);
    };

    const addNumbers = () => {
        setResult(num1 + num2);
    };

    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Count: ${count}\nUser Name: ${name}\nSum of Numbers: ${result}`);
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: '20px', 
                maxWidth: '400px', 
                margin: '50px auto', 
                padding: '20px', 
                border: '2px solid #4CAF50', 
                borderRadius: '10px', 
                backgroundColor: '#f9f9f9',
                boxShadow: '0 4px 8px rgba(16, 110, 11, 0.1)'
            }}
        >
            <h1 style={{ color: '#4CAF50', textAlign: 'center' }}>Interactive Form</h1>

           
            <div style={{ textAlign: 'center', width: '100%' }}>
                <h2 style={{ color: '#4CAF50' }}>Count: {count}</h2>
                <button type="button" onClick={increment} style={buttonStyle}>Increment</button>
                <button type="button" onClick={decrement} style={buttonStyle}>Decrement</button>
            </div>

            
            <div style={{ textAlign: 'center', width: '100%' }}>
                <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Enter name"
                    style={inputStyle}
                />
                <button type="button" onClick={setNameToNisanth} style={buttonStyle}>Reset to Nisanth</button>
                <h2 style={{ color: '#333' }}>User Name: {name}</h2>
            </div>

            
            <div style={{ textAlign: 'center', width: '100%' }}>
                <input
                    type="number"
                    value={num1}
                    onChange={handleNum1Change}
                    placeholder="Enter first number"
                    style={inputStyle}
                />
                <input
                    type="number"
                    value={num2}
                    onChange={handleNum2Change}
                    placeholder="Enter second number"
                    style={inputStyle}
                />
                <button type="button" onClick={addNumbers} style={buttonStyle}>Add Numbers</button>
                <h2 style={{ color: '#333' }}>Result: {result}</h2>
            </div>

           
            <div style={{ textAlign: 'center', width: '100%' }}>
                <button 
                    type="submit" 
                    style={{ 
                        padding: '10px 20px', 
                        backgroundColor: '#4CAF50', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '5px', 
                        cursor: 'pointer', 
                        fontWeight: 'bold',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                    }}
                >
                    Submit
                </button>
            </div>
        </form>
    );
};


const inputStyle = {
    padding: '10px',
    margin: '5px 0',
    border: '1px solid #ddd',
    borderRadius: '5px',
    width: '90%'
};

const buttonStyle = {
    padding: '10px 20px',
    margin: '5px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
};

export default Count;