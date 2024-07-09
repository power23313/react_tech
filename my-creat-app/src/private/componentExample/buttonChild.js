import React from "react";


function ButtonChildComponent(props) {
    return (
        <button onClick={props.handleClick}>
			Click me button
		</button>
    )
}

export default ButtonChildComponent;