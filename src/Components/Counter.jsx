import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    function increment() {
        setCount( count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>Likes {count}</h1>
            <button onClick={increment}>plus</button>
            <button onClick={decrement}>minus</button>
        </div>
    );
};

export default Counter;