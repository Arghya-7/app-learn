import style from './UserGreeting.module.css';
function UserGreeting(props){
    const welcomeMessage = <h1 className={style.success}>Weclome {props.name}</h1>
    const failureMessage = <h1 className={style.failure}>Login failed</h1>
    return(
        props.loggedIn ? welcomeMessage : failureMessage
    )
}

export default UserGreeting;