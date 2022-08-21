import { useEffect, useState } from "react"

export default function Sreen(props) {
  const [number, setNumber] = useState(props.numberr)

  //const number_format = parseFloat(number)
  //let number_display = number_format.toLocaleString('en-US')

  useEffect(function() {
    setNumber(number)
  }, [])

  return (
    <p className="text-White bg-VDDB_screen_background h-[4.5rem] font-sans my-4 rounded-lg flex items-center justify-end text-3xl p-5">
      {/* {number_display} */}
      {parseFloat(number).toLocaleString('en-US')}
    </p>
  )
}