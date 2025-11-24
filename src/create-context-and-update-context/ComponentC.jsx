import style from "./component.module.css"
import ComponentD from "./ComponentD";
function ComponentC(){
    return(<>
        <div className={style.backgroundMargin}>
            Component C
            <ComponentD />
        </div>
    </>)
}

export default ComponentC;