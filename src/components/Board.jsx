import Button from "./Button";
import './Board.css'

export default function Board(props) {
  const value = props.values
  return (
    <section className="grid grid-cols-4 gap-3 grid-rows-5 p-5 bg-VDDB_toggle_keypad_background rounded-lg">
      <Button value={value[0]}></Button>
      <Button value={value[1]}></Button>
      <Button value={value[2]}></Button>
      <Button value={value[3]}></Button>
      <Button value={value[4]}></Button>
      <Button value={value[5]}></Button>
      <Button value={value[6]}></Button>
      <Button value={value[7]}></Button>
      <Button value={value[8]}></Button>
      <Button value={value[9]}></Button>
      <Button value={value[10]}></Button>
      <Button value={value[11]}></Button>
      <Button value={value[12]}></Button>
      <Button value={value[13]}></Button>
      <Button value={value[14]}></Button>
      <Button value={value[15]}></Button>
      <Button value={value[16]}></Button>
      <Button value={value[17]}></Button>
    </section>
  )
}