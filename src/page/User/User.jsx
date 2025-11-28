import {useParams} from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar";
export default function User(){
    const { name } = useParams();
    return (<>
        < NavBar />
        <h1>Hello {name.toUpperCase()}</h1>
    </>);
}