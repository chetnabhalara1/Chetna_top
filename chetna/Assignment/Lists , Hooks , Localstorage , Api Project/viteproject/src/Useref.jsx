// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";

const Useref = () => {
    const Data = useRef(0);

    const rendervalue = () => {
        Data.current += 1;
        console.log("Render value:", Data.current);
    };

    return (
        <div>
            <h1>useRef Example</h1>
            <button onClick={rendervalue}>render</button>
        </div>
    );
};

export default Useref;
