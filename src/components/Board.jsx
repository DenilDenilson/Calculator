import Button from "./Button";
import { useState } from "react";

export default function Board(props) {
  const value = props.values
  const [name, setName] = useState('Hola')


  return (
    <section className="grid grid-cols-4 gap-3 grid-rows-5 p-5 bg-VDDB_toggle_keypad_background rounded-lg">
      {
        value.map((val) => <Button key={val} value={val} onTextChange={props.onTextChange2}></Button>)
      }
      {/* <p>{name}</p> */}
    </section>
  )
}