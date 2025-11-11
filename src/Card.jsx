import roseImage from "./asset/rose.jpeg";
function Card(){
    return(
        <div className="card">
            <img src={roseImage}></img>
            <h2>Card Title</h2>
            <p>This is a simple description inside a clean, minimal card layout.</p>
            <button>Learn More</button>
        </div>
    )
}

export default Card;