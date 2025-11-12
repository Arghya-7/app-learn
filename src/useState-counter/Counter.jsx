import React, {useState} from "react";
function Counter(){
    const [couter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(couter + 1);
    }

    const decrementCounter = () => {
        setCounter(couter - 1);
    }

    const resetCounter = () => {
        setCounter(0);
    }
    return(
        <>
            <p>{couter}</p>
            <button onClick={incrementCounter}>Increament</button>
            <button onClick={decrementCounter}>Decrement</button>
             <button onClick={resetCounter}>Reset</button>
        </>
    )

}

export default Counter;