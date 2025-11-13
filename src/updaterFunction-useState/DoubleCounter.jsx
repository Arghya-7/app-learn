import React, {useState} from "react";

// setCount will call in async way. It will intialize one and then it will call all setCounter method
// To run all operation in order manner. We should use arrow function
function DoubleCounter(){
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(data => data + 1);
        setCount(data => data + 1);
    }

    const decrement = () => {
        setCount(data => data - 1);
        setCount(data => data - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(<>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </>)
}

export default DoubleCounter;