import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import DogGuardian from './components/DogGuardian';
import NavBar from './components/NavBar';
import Screen from './components/Screen';

function App() {
  const values = ['7', '8', '9', 'DEL', '4', '5', '6', '+', '1', '2', '3', '-', '.', '0', '/', '*', 'RESET', '=']
  const [val, setVal] = useState('0')
  const [val2, setVal2] = useState('0')
  const [op, setOp] = useState('')
  const [equal, setEqual] = useState('')
  const [aux, setAux] = useState(0)

  const onTextChange3v2 = e => {
    if (e.target.value == 'RESET') {
      setVal('0')
      setVal2('0')
      setOp('')
      setEqual('')
    }
    if (e.target.value == 'DEL') {
      if (aux == 1) {setVal(val.slice(0, -1))}
      if (aux == 2) {setVal2(val2.slice(0, -1))}
    }
    if (!(isNaN(e.target.value)) || e.target.value=='.') {
      if (op == '' || op == 'RESET') {
        setAux(1)
        setVal(val + e.target.value)
      }
      else {
        setAux(2)
        setVal2(val2 + e.target.value)
      }
    }
    else {
      if (e.target.value != '=') {
        if (e.target.value != 'DEL') setOp(e.target.value)
      }
      else setEqual('=')
    }
  }

  return (
    <div className=''>
    <div className="neon App w-screen h-screen bg-VDDB_main_background grid place-content-center">
      {/* Barra superior */}
      {/* <p>{val}</p> */}
      {/* <p>{val2}</p> */}
      {/* <p>{op}</p> */}
      {/* <p>{equal}</p> */}
      <section className="w-[21rem] h-[36rem]">
        <NavBar marca='calc'></NavBar>
        {/* <DogGuardian className="w-[21rem] h-[36rem]"> */}
        <Screen number1={val} 
          number2={val2} 
          op={op} 
          equal={equal}
          aux={aux}
          ></Screen>
        <Board 
        values={values}
        // onTextChange2={(e) => onTextChange3(e.target.value)}
        onTextChange2={onTextChange3v2}
        ></Board>
        {/* </DogGuardian> */}
      </section>
    </div>
    </div>
  );
}

export default App;
