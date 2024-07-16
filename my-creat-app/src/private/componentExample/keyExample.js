import React, {useState} from "react";

const ExampleComponent = () => {
    const [items, setItems] = useState(['apple', 'banana', 'cherry']);

    const handleRemoveByIndex = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    const [kItems, setkItems] = useState(['apple', 'banana', 'cherry']);
    const handleRemoveByItems = (item) => {
        const newItems = kItems.filter((i) => i !== item);
        setkItems(newItems);
    };

    return (
        <div>
            <h3>key example</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => handleRemoveByIndex(index)}>Remove by index</button>
                    </li>
                ))}
            </ul>
            <ul>
                {kItems.map((item) => (
                    <li key={item}>
                        {item}
                        <button onClick={() => handleRemoveByItems(item)}>Remove by items</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExampleComponent;