import "./App.css";
import Contact from "./component/Contact/Contact";
import Navbar from "./component/Navbar/Navbar";
import Howitworks from "./component/Howitworks/Howitworks";
import Ourproduct from "./component/Ourproduct/Ourproduct";
import Ourteam from "./component/Ourteam/Ourteam";
import BroodingChance from "./component/BroodingChance/BroodingChance";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BroodingChance />
      <Ourproduct />
      <Howitworks />
      <Ourteam /> 
      <Contact />
    </div>
  );
}

export default App;
