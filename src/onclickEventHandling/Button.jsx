function Button(props){
    const name = props.name;
    let count = 1;
    const handleClick = (e) => {
        if(count > 3){
            e.target.textContent = `${name}! Don't click me. You Clicked ${count} times`
        } else {
            e.target.textContent = `Button clicked ${count} times`;
        }
        count +=1;
    }

    return(<button onClick={(e) => handleClick(e)}>Click me</button>)
}

export default Button;