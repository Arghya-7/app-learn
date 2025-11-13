import React, {useState} from "react";
function CarDetails(){
    const [car, setCar] = useState({model : "EV", manufacturer : "TATA"});
    const handleCarModelChange = (e) => {
        setCar(c => {
            return {...c, model: e.target.value}
        })
    }

    const handleManufaturerChange = (e) => {
        setCar(c => {
            return {...c, manufacturer : e.target.value}
        })
    }


    return(<>
        <p>Car model : {car.model}, manufacturer : {car.manufacturer}</p>
        <label>Provide car model</label>
        <input type="text" onChange={handleCarModelChange} value={car.model}/>

        <br />
        <label>Provide car manufacturer</label>
        <input type="text" onChange={handleManufaturerChange} value={car.manufacturer}/>
    </>)
}

export default CarDetails;