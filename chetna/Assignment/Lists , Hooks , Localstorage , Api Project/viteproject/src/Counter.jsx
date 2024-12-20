import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);


    const increment = () => {
        setCount(count + 1);
    };


    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div >
            <h1>Counter</h1>
            <p> Count:{count}</p>
            <div>
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    );
};

export default Counter;
