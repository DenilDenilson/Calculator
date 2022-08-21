import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import DogGuardian from './components/DogGuardian';
import NavBar from './components/NavBar';
import Screen from './components/Screen';

function App() {
  const values = ['7', '8', '9', 'DEL', '4', '5', '6', '+', '1', '2', '3', '-', '.', '0', '/', 'x', 'RESET', '=']
  const [val, setVal] = useState('')
  
  const onTextChange3 = e => {
    setVal(val + e.target.value)
  }

  return (
    <div className="App w-screen h-screen bg-VDDB_main_background grid place-content-center">
      {/* Barra superior */}
      <p>{val}</p>
      <section className="w-[21rem] h-[36rem]">
        <NavBar marca='calc'></NavBar>
        {/* <DogGuardian className="w-[21rem] h-[36rem]"> */}
        <Screen numberr={val}></Screen>
        <Board 
        values={values}
        // onTextChange2={(e) => onTextChange3(e.target.value)}
        onTextChange2={onTextChange3}
        ></Board>
        {/* </DogGuardian> */}
      </section>
    </div>
  );
}

export default App;
