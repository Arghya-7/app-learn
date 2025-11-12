import Card from "./Card";
import Header from "./header/header";
import Student from "./students/Student";
import UserGreeting from "./userGreeting/UserGreeting";
function App() {
  return (
    <div className="App">
      <Header/>
      <Card/>
      <Card/>
      <Student name="Arghya" age={24} isTeenager={true}/>
      <Student name="David" age={18} isTeenager={false}/>
      <UserGreeting name="Ram" loggedIn={true}/>
      <UserGreeting name="Ram" loggedIn={false}/>
    </div>
  );
}

export default App;
