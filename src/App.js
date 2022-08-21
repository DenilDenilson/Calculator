import './App.css';
import Board from './components/Board';
import DogGuardian from './components/DogGuardian';
import NavBar from './components/NavBar';
import Screen from './components/Screen';

function App() {
  const values = ['7', '8', '9', 'DEL', '4', '5', '6', '+', '1', '2', '3', '-', '.', '0', '/', 'X', 'RESET', '=']

  return (
    <div className="App w-screen h-screen bg-VDDB_main_background grid place-content-center">
      {/* Barra superior */}
      <section className="w-[21rem] h-[36rem]">
        <NavBar marca='calc'></NavBar>
        {/* <DogGuardian className="w-[21rem] h-[36rem]"> */}
        <Screen></Screen>
        <Board values={values}></Board>
        {/* </DogGuardian> */}
      </section>
    </div>
  );
}

export default App;
