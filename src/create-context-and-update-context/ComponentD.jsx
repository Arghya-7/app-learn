import style from "./component.module.css"
import {UseValue} from "./ComponentA";
import React, {useState, useContext} from "react";
function ComponentD(){
    const value = useContext(UseValue);
    return(<>
        <div className={style.backgroundMargin}>
            <div>Component D</div>
            {value}
        </div>
    </>)
}

export default ComponentD;