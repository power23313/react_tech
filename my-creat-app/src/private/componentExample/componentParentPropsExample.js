import React from "react";
import ChildComponent from "./componentChildPropsExample";

function ParentComponent() {
    const message = "Hello parent";

    return <ChildComponent message={message}/>
}

export default ParentComponent;