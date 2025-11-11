function Student(props){
    return(
        <div className="student">
            <p>Student Name : {props.name}</p>
            <p>Student Age: {props.age}</p>
            <p>Student isTeenager : {props.isTeenager ? "Yes" : "No"}</p>
        </div>
    )
}

export default Student;