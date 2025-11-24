import style from "./component.module.css"
import ComponentC from "./ComponentC";
function ComponentB(){
    return(<>
        <div className={style.backgroundMargin}>
            Component B
            <ComponentC />
        </div>
    </>)
}

export default ComponentB;