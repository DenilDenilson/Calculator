export default function Theme() {
  return (
    <section>
      <div>Theme</div>
      <div>
        <label htmlFor="input-rad-1">1</label>
        <input 
          type='radio'
          name='style-btn'
          value='1'
          id="input-rad-1"
        />
      </div>
      <div>
        <label htmlFor="input-rad-2">2</label>
        <input 
          type='radio'
          name='style-btn'
          value='2'
          id="input-rad-2"
        />
      </div>
      <div>
        <label htmlFor="input-rad-3">3</label>
        <input 
          type='radio'
          name='style-btn'
          value='3'
          id="input-rad-3"
        />
      </div>
    </section>
  )
}