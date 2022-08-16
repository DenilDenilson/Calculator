import './App.css';
import Board from './components/Board';
import NavBar from './components/NavBar';
import Screen from './components/Screen';

function App() {
  return (
    <div className="App">
      {/* Barra superior */}
      <NavBar marca='calc'></NavBar>
      <Screen></Screen>
      <Board></Board>
    </div>
  );
}

export default App;
