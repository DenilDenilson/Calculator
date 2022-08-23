import { useEffect, useState } from "react"
import {evaluate} from 'mathjs'

export default function Sreen({ number1, number2, op, equal, aux }) {
  
  let number_val = '0'
  // if (op == '' || op == 'RESET') {
  //   number_val = number1
  // }
  if (aux == 1) {number_val = number1}
  else if (aux == 2) {number_val = number2}
  // else {
  //   number_val = number2
  // }
  if (equal == '=') {
    // if((number1+op+number2).includes('RESET')) {
    //   op = ''
    //   equal = ''
    //   alert('Operación inválida')
    // }
    //else 
    {number_val = evaluate(number1+op+number2)}
  }

  return (
    <p className="text-White bg-VDDB_screen_background h-[4.5rem] font-sans my-4 rounded-lg flex items-center justify-end text-3xl p-5">
      {/* {
        if ({op} == '') {
          console.log('Hola')
        }
      } */}
      {parseFloat(number_val).toLocaleString('en-US')}
    </p>
  )
}