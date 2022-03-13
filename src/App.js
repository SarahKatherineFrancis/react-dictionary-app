import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary />
      </div>
      <footer>
        Coded by {""}
        <a href="https://github.com/SarahKatherineFrancis/react-dictionary-app">
          Sarah Francis
        </a>
      </footer>
    </div>
  );
}

export default App;
