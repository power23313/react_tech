import React, {useState} from "react";

function MySelect() {
    const [selectedNumber, setSelectNumber] = useState(1);
    const [selectedCombineNumber, setCombineSelectNumber] = useState(1);

    return (
        <div>
            <h3>Select example</h3>
            <select
                value={selectedNumber}
                onChange={(event) => setSelectNumber(parseInt(event.target.value))}
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <select
                value={selectedCombineNumber}
                onChange={(event) => setCombineSelectNumber(parseInt(event.target.value))}
            >
                {
                    Array.from({ length: 100 }, (_, index) => (
                        <option key={index + 1} value={index + 1}>
                            {index + 1}
                        </option>
                    ))
                }
            </select>
        </div>
    );
}

export default MySelect;