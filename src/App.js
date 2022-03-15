import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <Dictionary defaultKeyword="candy" />
      </div>
      <footer>
        Coded by {""}
        <a href="https://friendly-bose-968c32.netlify.app/">
          Sarah Francis
        </a>{" "}
        and is{" "}
        <a href="https://github.com/SarahKatherineFrancis?tab=repositories">
          {" "}
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
