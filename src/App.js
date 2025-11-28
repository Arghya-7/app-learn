import Card from "./Card";
import Header from "./header/header";
import Student from "./students/Student";
import UserGreeting from "./userGreeting/UserGreeting";
import List from "./listr-endering/List";
import Button from "./onclickEventHandling/Button";
import Image from "./onclickEventHandling/Image";
import Counter from "./useState-counter/Counter";
import Inputhandler from "./input-handling/input";
import DoubleCounter from "./updaterFunction-useState/DoubleCounter";
import CarDetails from "./updaterFunction-useState/CarDetails";
import CustomListManupulation from "./custom-list-manupulation/CustomListManupulation";
import CarObjectHandling from "./custom-list-manupulation/CustomCarManupulation";
import Timer from "./timer/Timer";
import ComponentA from "./create-context-and-update-context/ComponentA";
import UseRefUse from "./useRef-usecase/UseRefUse";
import InputUserRef from "./useRef-usecase/InputUseRef";
import StopWatch from "./stopwatch/StopWatch";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./page/homepage/Home";
import About from "./page/About/About";
import NotFound from "./page/NotFound/NotFound";
import Contact from "./page/contact/Contact";
import User from "./page/User/User";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={< Contact/>} />
                <Route exact path="/user/:name" element={<User />} />
                <Route exact path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
