export default function Theme(props) {
  return (
    <section className="flex items-end gap-4">
      <p className="text-White font-sans uppercase text-xs">Theme</p>
      <div className="flex flex-col w-[4.5rem]">
        <label htmlFor='styles' className="flex justify-evenly items-end gap-3 text-White font-sans relative">
          <p className="">3</p>
          <p className="">2</p>
          <p className="">1</p>
        </label>
        <input 
          type="range" 
          name="styles" 
          id="styles"
          min={1}
          max={3}
          step={1}
          //value={1}
          className="appearance-none p-[3px] rounded-xl bg-VDDB_toggle_keypad_background focus:bg-Red_key_background_toggle input-range"
          onChange={props.themeChange}
        />
      </div>
    </section>
  )
}