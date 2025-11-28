import NavBar from "../../components/Navbar/NavBar";
import {useNavigate} from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const goToContact = () => {
        navigate("/contact");
    }

    const goToUser = () => {
        navigate("/user/" + "Sham");
    }
    return (<>
        <NavBar />
        <h1>Home Page</h1>
        <button onClick={goToContact}>Contact us</button>
        < button onClick={goToUser}>User page</button>{" "}
    </>);
}