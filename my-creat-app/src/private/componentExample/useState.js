import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [functionCount, setFunctionCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }
    const incrementFunctionCount = () =>{
        setFunctionCount((preCount) => preCount + 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>increase count</button>
            <p>functionCount: {functionCount}</p>
            <button onClick={incrementFunctionCount}>increase function count</button>
        </div>
    );
}

export default Counter;