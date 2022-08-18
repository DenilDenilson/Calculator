export default function Theme() {
  return (
    <section className="flex items-end gap-4">
      <p className="text-White font-sans uppercase text-xs">Theme</p>
      <div className="flex flex-col w-[4.5rem]">
        <label htmlFor='styles' className="flex justify-evenly items-end gap-3 text-White font-sans relative">
          <p className="">1</p>
          <p className="">2</p>
          <p className="">3</p>
        </label>
        <input 
          type="range" 
          name="styles" 
          id="styles"
          min={1}
          max={3}
          step={1}
          className="appearance-none p-[3px] rounded-xl bg-VDDB_toggle_keypad_background focus:bg-Red_key_background_toggle input-range"
        />
        {/* <div className="flex flex-col">
          <label htmlFor="input-rad-1" className="text-White font-sans">1</label>
          <input 
            type='radio'
            name='style-btn'
            value='1'
            id="input-rad-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="input-rad-2" className="text-White font-sans">2</label>
          <input 
            type='radio'
            name='style-btn'
            value='2'
            id="input-rad-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="input-rad-3" className="text-White font-sans">3</label>
          <input 
            type='radio'
            name='style-btn'
            value='3'
            id="input-rad-3"
          />
        </div> */}
      </div>
    </section>
  )
}