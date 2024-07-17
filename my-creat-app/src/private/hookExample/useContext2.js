import React from "react";
import { useGlobalContext } from "./useContext";

const ChildComponent = () => {
    const {globalState, setGlobalState} = useGlobalContext();

    return (
        <div>
            <p>global state: {globalState}</p>
            <button onClick={() => setGlobalState('new value')}> update value </button>
        </div>
    );
};

export default ChildComponent;