import React, {useState} from "react";
function CarObjectHandling(){
    const [carList, setCarList] = useState([{model : "BMW", maker : "TATA", id: 1},
                                            {model : "EV", maker: "TATA", id: 2}
    ]);
    
    const addCarDetails = () => {
        setCarList([...carList,{
                                model : document.getElementById("carname").value, 
                                id : carList.length,
                                maker : document.getElementById("brandName").value}])
    }

    const removeCar = (id) => {
        setCarList(carList.filter(c => c.id != id));
    }
    return(<>
        <h2>Car List</h2>
        <table>
            {carList.map(data => <tr>
                    <td style={{padding:"25px", backgroundColor: "red"}}>{data.id}</td>
                    <td style={{padding:"25px", backgroundColor: "red"}}>{data.model}</td>
                    <td style={{padding:"25px", backgroundColor: "red"}}>{data.maker}</td>
                    <td style={{padding:"25px", backgroundColor: "red"}}><button onClick={() => removeCar(data.id)}>Remove</button></td>
            </tr>)}
        </table>

        <label>Enter brand name: </label>
        <input type="text" placeholder="Enter car name:" id="carname"/>
        <br />
        <label>Enter car brand: </label>
        <input type="text" placeholder="Enter car brand" id="brandName"/>
        <button onClick={addCarDetails}>Add</button>
    </>)
}

export default CarObjectHandling;