import { useRef } from "react";

function InputUserRef() {
    const focused1 = useRef(null);
    const focused2 = useRef(null);
    const focused3 = useRef(null);

    const handleClick1 = () => {
        console.log("Clicked 1");
        focused1.current.focus();
        focused1.current.style.backgroundColor = "yellow";
        focused2.current.style.backgroundColor = "";
        focused3.current.style.backgroundColor = "";
    }

    const handleClick2 = () => {
        console.log("Clicked 1");
        focused2.current.focus();
        focused1.current.style.backgroundColor = "";
        focused2.current.style.backgroundColor = "yellow";
        focused3.current.style.backgroundColor = "";
    }

    const handleClick3 = () => {
        console.log("Clicked 1");
        focused3.current.focus();
        focused1.current.style.backgroundColor = "";
        focused2.current.style.backgroundColor = "";
        focused3.current.style.backgroundColor = "yellow";
    }
    return (<div>
        <button onClick={handleClick1}>Click 1</button>
        <input ref={focused1}/>
        <br />


        <button onClick={handleClick2}>Click 2</button>
        <input type="text" ref={focused2}/>
        <br />


        <button onClick={handleClick3}>Click 3</button>
        <input type="text" ref={focused3}/>
    </div>)
}

export default InputUserRef;