import React, { useState } from "react";

function RaccConditionCounter() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
        setCount(count + 1);
    }
    const incrementFunctionCount = () =>{
        setCount((preCount) => preCount + 1);
        setCount((preCount) => preCount + 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>increase count</button>
            <button onClick={incrementFunctionCount}>increase function count</button>
        </div>
    );
}

export default RaccConditionCounter;