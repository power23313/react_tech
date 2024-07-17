import React, {useState, useEffect} from "react";

function DataFetching() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div>
            <h3> fetch example with useEffect</h3>
            {data ? <p>data: {data}</p> : <p>loading...</p>}
        </div>
    );
}

export default DataFetching;