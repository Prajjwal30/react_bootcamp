import logo from './logo.svg';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi Prajjwal!! Welcome back !
        </p>
          <Post/>
    
      </header>
    </div>
  );
}

export default App;
