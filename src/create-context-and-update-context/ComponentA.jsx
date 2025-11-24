import style from "./component.module.css"
import ComponentB from "./ComponentB";
import React, {useState, createContext, useEffect} from "react";
export const UseValue = createContext();
function ComponentA(){
    const [value, setValue] = useState("Hi Arghya");
    useEffect(()=>{
        const id = setInterval(()=> {
            if(new Date().getSeconds() % 2 == 0){
                setValue("Hi Arghya");
            } else {
                setValue("Welcome to React");
            }
        }, 1000);
        return () => {clearInterval(id)};
    })
    return(<>
        <div className={style.backgroundMargin}>
            <div>
                Component A
            </div>
            <UseValue.Provider value={value}>
                {value}
                <ComponentB  />
            </UseValue.Provider>
        </div>
    </>)
}

export default ComponentA;