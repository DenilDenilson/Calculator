import { useEffect, useState } from "react"
import {evaluate} from 'mathjs'

export default function Sreen({ number1, number2, op, equal, aux }) {
let right = ''
let left = ''
let operation = ''
  if (aux == 0) {right = number1}
  if (aux == 1) {
    left = number1
    right = number2
  }
  // RENDERIZADO CONDICIONAL
  if (equal == '=') {
    operation = evaluate('0' + number1 + op + '0' + number2)
    return (
      <p className="text-White bg-VDDB_screen_background h-[4.5rem] font-sans my-4 rounded-lg flex justify-end items-center text-3xl p-5">
        { parseFloat(operation).toLocaleString('en-US')}
      </p>
    )
  }
  else {
    return (
      <p className="text-White bg-VDDB_screen_background h-[4.5rem] font-sans my-4 rounded-lg flex justify-between items-center text-3xl p-5">
        <div className="flex flex-col items-center h-16 opacity-50">
          <p>{ left == '' ? '' : parseFloat(left).toLocaleString('en-US') }</p>
          <p>{op}</p>
        </div>
        <p>{ right == '' ? '' : parseFloat(right).toLocaleString('en-US') }</p>
      </p>
    )
  }
  
}
////let number_val = '0'
  // if (op == '' || op == 'RESET') {
  //   number_val = number1
  // }
  /////if (aux == 1) {number_val = number1}
  /////else if (aux == 2) {number_val = number2}
  // else {
  //   number_val = number2
  // }
  /////if (equal == '=') {
    // if((number1+op+number2).includes('RESET')) {
    //   op = ''
    //   equal = ''
    //   alert('Operación inválida')
    // }
    //else 
    /////{number_val = evaluate(number1+op+number2)}
  /////}
  ////{number_val = evaluate(number1+op+number2)}