import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Proyecto de Azure y React usando Web Static
        </p>
        <a
          className="App-link"
          href="https://learn.microsoft.com/es-es/azure/?product=popular"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende Azure!
        </a>
      </header>
    </div>
  );
}

export default App;
