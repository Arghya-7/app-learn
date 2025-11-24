import React, {useState, useEffect} from "react";
import style from "./timer.module.css";
function Timer(){
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {clearInterval(id);}

    }, [])
    const getTime = () => {
        const dayNight = time.getHours() < 12 ? "AM" : "PM";
        const hour = (time.getHours() % 12) == 0 ? 12 : (time.getHours() % 12);
        return hour + ":" + time.getMinutes() + ":" + time.getSeconds() + " "+ dayNight;
    }
    return(<>
       <center>
            <div className={style.timer}>
                <h1>{getTime()}</h1>
            </div>
       </center>
    </>)
}

export default Timer;