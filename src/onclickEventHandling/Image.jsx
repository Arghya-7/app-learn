import image from '../asset/rose.jpeg';
import style from './style.module.css';
function Image(){
    const onClickHandler = (e) => {
        e.target.style.display = "none";
    }
    return(<img onClick={(e) => onClickHandler(e)} src={image} className={style.imageStyle}></img>)
}

export default Image;