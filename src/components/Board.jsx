import Button from "./Button";
import './Board.css'

export default function Board() {
  return (
    <section className="grid grid-cols-4 gap-2 grid-rows-5 p-2 bg-White">
      <Button value='7'></Button>
      <Button value='8'></Button>
      <Button value='9'></Button>
      <Button value='DEL'></Button>
      <Button value='4'></Button>
      <Button value='5'></Button>
      <Button value='6'></Button>
      <Button value='+'></Button>
      <Button value='1'></Button>
      <Button value='2'></Button>
      <Button value='3'></Button>
      <Button value='-'></Button>
      <Button value='.'></Button>
      <Button value='0'></Button>
      <Button value='/'></Button>
      <Button value='x'></Button>
      <Button value='RESET'></Button>
      <Button value='='></Button>
    </section>
  )
}