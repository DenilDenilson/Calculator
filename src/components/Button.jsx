export default function Button({ value }) {
  let clase = 'font-sans text-[32px] py-3 bg-Light_grayish_orange_key_background rounded-lg'
  // if (value == 'RESET' || value == '=') {
  //   clase = 'text-White col-span-2 font-sans text-[32px] py-3 '
  // } 
  // else {
  //   clase = 'text-White font-sans text-[32px] py-3 bg-Light_grayish_orange_key_background'
  // }
  if (value == 'RESET') {
    clase = clase + ' text-White col-span-2 bg-DDB_key_background button-reset'
  }
  else if (value == '=') {
    clase = clase + ' text-White col-span-2 bg-Red_key_background_toggle button-equal'
  }
  else if (value == 'DEL') {
    clase = clase + ' text-White bg-DDB_key_background button-del'
  }
  else {
    clase = clase + ' text-Very_dark_grayish_blue buttons'
  }

  return (
    <button className={clase} 
    value={value}>
      {value}
    </button>
  )
}