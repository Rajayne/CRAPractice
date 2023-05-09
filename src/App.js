import logo from "./logo.svg";
import "./App.css";
import { sum, multiply } from "./helpers.js";
import cats, { meow } from "./cats";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li>Name: {cats[0].name}</li>
          <li>Midna goes {meow()}</li>
        </ul>
        <p>Sum(3, 7) = {sum(3, 7)}</p>
        <p>Multiply(4, 9) = {multiply(4, 9)}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
