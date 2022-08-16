import './App.css';
import Board from './components/Board';
import NavBar from './components/NavBar';
import Screen from './components/Screen';

function App() {
  return (
    <div className="App w-screen h-screen bg-VDDB_main_background p-4">
      {/* Barra superior */}
      <section className="">
        <NavBar marca='calc'></NavBar>
        <Screen></Screen>
        <Board></Board>
      </section>
    </div>
  );
}

export default App;
