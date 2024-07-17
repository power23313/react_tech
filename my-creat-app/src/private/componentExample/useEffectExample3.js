import React, {useState, useEffect} from "react";

function EventListener() {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({x: e.clientX, y: e.clientY});
        }
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }

    }, []);

    return (
        <div>
            <h3> get mouse position example with useEffect</h3>
            <p>mouse position: {mousePosition.x}, {mousePosition.y}</p>
        </div>
    );
}

export default EventListener;