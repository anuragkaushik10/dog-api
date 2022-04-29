import "./App.css";
import Header from "./Header";
import RandomImages from "./RandomImages";
import Dropdown from "./Dropdown";
import Grid from "./Grid";

function App() {
  return (
    <div className="App">
      <Header />
      <br></br>
      <RandomImages />
      <br></br>

      <Dropdown />
      <br></br>

      <Grid />
    </div>
  );
}

export default App;
