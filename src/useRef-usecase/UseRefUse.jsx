import React, {useState, useRef, useEffect} from "react";
function UseRefUse() {
    // If we use useRef, page will not be re-rendered
    const value = useRef(0);
    const changeData = () => {
        value.current++;
        console.log(value.current);
    }
    return(<>
        <h1>Hello Arghya</h1>
         <button onClick={changeData}>Increment Count</button>
    </>)
}

export default UseRefUse;