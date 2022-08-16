export default function Theme() {
  return (
    <section className="flex">
      <div className="text-White">Theme</div>
      <div className="flex">
        <div className="flex flex-col">
          <label htmlFor="input-rad-1" className="text-White">1</label>
          <input 
            type='radio'
            name='style-btn'
            value='1'
            id="input-rad-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="input-rad-2" className="text-White">2</label>
          <input 
            type='radio'
            name='style-btn'
            value='2'
            id="input-rad-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="input-rad-3" className="text-White">3</label>
          <input 
            type='radio'
            name='style-btn'
            value='3'
            id="input-rad-3"
          />
        </div>
      </div>
    </section>
  )
}