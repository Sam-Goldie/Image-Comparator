import image1 from './GDCEE9JXAAA-AAT.jpg'
import './App.css';
import imageToggle from './imageToggle';

function App() {
  document.addEventListener("keydown", imageToggle) 
  return (
    <div className="App">
      <header className="App-header">
        <img width="100vw" src={image1} id="picture" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
