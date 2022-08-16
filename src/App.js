import './App.css';
import NavBar from './components/NavBar';
import Screen from './components/Screen';

function App() {
  return (
    <div className="App">
      {/* Barra superior */}
      <NavBar marca='calc'></NavBar>
      <Screen></Screen>
    </div>
  );
}

export default App;
