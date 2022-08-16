export default function Button({ value }) {
  let clase = ''
  if (value == 'Reset' || value == '=') {
    clase = 'text-White col-span-2'
  } else {
    clase = 'text-White'
  }

  return (
    <button className={clase} 
    value={value}>
      {value}
    </button>
  )
}