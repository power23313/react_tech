import React, {useState, useEffect} from "react";

function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `nowcount : ${count}`;
    });

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () =>clearInterval(interval);
    }, []);

    return (
        <div>
            <h3>useEffect example</h3>
            <p>now count {count}</p>
            <button onClick={() =>setCount(count + 1)}>add one</button>

            <p>after second: {seconds}</p>
        </div>
    );
}

export default Example;