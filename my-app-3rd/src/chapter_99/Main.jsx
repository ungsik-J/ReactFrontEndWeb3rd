import React, { useState } from 'react';

const Main = () => {
    // Declare a state variable "count" with an initial value of 0
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Count :: useState</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)} name='Increment'>Increment</button>
            <button onClick={() => setCount(count - 1)} > Decrement</button>
            <button onClick={() => setCount(0)} > Reset </button>
            <h2>================================================</h2>
        </div >
    );
};

export default Main;
