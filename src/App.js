import logo from './logo.svg';
import './App.css';
import ConversorDePeso from './components/ConversorDePeso';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ConversorDePeso/>
        
        
      </header>
    </div>
  );
}

export default App;
