import React, {useState} from "react";
function Inputhandler(){
    const [name, setName] = useState("name");
    const [age, setAge] = useState(0);
    const [profession, setProfession] = useState("None");
    const [button, setButton] = useState("Button");
    const [color, setColor] = useState("#FFFFF");

    const handleTextChange = (e)=>{
        setName(e.target.value);
    }

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }

    const handleProfessionChange =(e) => {
        setProfession(e.target.value);
    }

    const handleButtonChange = (e) => {
        setButton("Yaay !! You clicked me")
    }

    const handleColorChange = (e) => {
        setColor(e.target.value);
    }

    return(
        <>
            <label>Enter your name</label>
            <input type="text" value={name} onChange={handleTextChange}/>
            <p>Name : {name}</p>

            <label>Enter your age</label>
            <input type="number" value={age} onChange={handleAgeChange}/>
            <p>Age : {age}</p>

            <label>Select your profession</label>
            <select onChange={handleProfessionChange}>
                <option value="None">None</option>
                <option value="Student">Student</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Others">Others</option>
            </select>
            <p>Profession : {profession}</p>

            <button onClick={handleButtonChange}>{button}</button>

            <br />
            <label>Select the Color</label>
            <input type="color" onChange={handleColorChange}/>
            <p style={{"color":color}}>Selected color {color} </p>
        </>
    )
}

export default Inputhandler;