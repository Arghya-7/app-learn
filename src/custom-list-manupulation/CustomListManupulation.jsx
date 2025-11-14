import React, {useState} from "react";
function CustomListManupulation(){
    const [fruitList, setFruit] = useState(["Apple", "Orange", "Mango"]);

    const handleRemove = (index) => {
        setFruit(fruitList.filter((_, i) => i != index ));
    }

    const handleFruitAdding = () => {
        setFruit([...fruitList, document.getElementById("newFruit").value ]);
    }
    return(<>
        <ul>
            <h2>The fruits items are</h2>
            {fruitList.map((data, index)=> 
                        <li key={index}>
                            {data}
                            <button onClick={()=>handleRemove(index)}>Remove</button>
                        </li>)}
            <h2>Add fruit</h2>
            <input type="text" placeholder="Enter fruit name: " id="newFruit"/>
            <button onClick={handleFruitAdding}>Add</button>
        </ul>
    </>)
}

export default CustomListManupulation;