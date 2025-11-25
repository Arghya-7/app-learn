import React, {useState, useEffect, useRef} from "react";
import style from "./stopwatch.module.css";
function StopWatch(){
    const [time,setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const timeId = useRef(null);

    const handleStartStopWatch = () => {
        setRunning(true);
    }
    const handlePauseStopwatch = () => {
        setRunning(false);
    }

    const handleStopStopwatch = () => {
        setRunning(false);
        setTime(0);
    }


    useEffect(() => {
        if(running == true) {

            timeId.current = setInterval(()=>{
                setTime(time => time + 1);
            },100);
        }
        return () => {clearInterval(timeId.current)};
    }, [running]);

    const formatTime = () => {
        return `${parseInt(time / (60 * 60))}:${(parseInt(time / (60))) % 60} :${time % (60)}`
    }
    return(<>
        <center>
            <h1>{formatTime()}</h1>
            <div>
                <button className={style.greenColor} onClick={handleStartStopWatch}>Start</button>
                <button className={style.redColor} onClick={handlePauseStopwatch}>Stop</button>
                <button onClick={handleStopStopwatch}>Reset</button>
            </div>

        </center>
    </>)
}

export default StopWatch;