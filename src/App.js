import Card from "./Card";
import Header from "./header/header";
import Student from "./students/Student";
import UserGreeting from "./userGreeting/UserGreeting";
import List from "./listrendering/List";
function App() {
  const fruits = [
    {id : 1, name : "Mango",calories: 10},
    {id : 2,name : "Apple",calories: 100},
    {id : 3, name : "Pineapple", calories : 100 },
    {id : 4,name : "Orange", calories : 200 }];

  const vegetables = [{id: 3, name : "Onion", calories : 100},
    {id: 1,name : "Potato", calories : 30},
    {id : 2,name : "Bringle", calories: 150}
  ]
  return (
    <div className="App">
      <List types="Fruit" items={fruits}/>
      <List types="Vegetables" items={vegetables}/>
    </div>
  );
}

export default App;
