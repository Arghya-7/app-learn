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
function App() {
  return (
    <div className="App">
      <DoubleCounter/>
      <CarDetails/>
    </div>
  );
}

export default App;
