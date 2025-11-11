import Card from "./Card";
import Header from "./header/header";
import Student from "./students/Student";
function App() {
  return (
    <div className="App">
      <Header/>
      <Card/>
      <Card/>
      <Student name="Arghya" age={24} isTeenager={true}/>
      <Student name="David" age={18} isTeenager={false}/>
    </div>
  );
}

export default App;
